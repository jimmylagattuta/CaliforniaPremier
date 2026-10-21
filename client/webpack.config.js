
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },

  devtool: 'source-map',

  cache: {
    type: 'filesystem',
  },

  optimization: {
    minimize: true,

    splitChunks: {
      chunks: 'all',
    },

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            unused: true,
            dead_code: true,
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/sitemap.xml'),
          to: 'sitemap.xml',
        },
        {
          from: path.resolve(__dirname, 'public/robots.txt'),
          to: 'robots.txt',
        },
      ],
    }),

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,

      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
          },
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources',
          },
        },
      ],
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      components: path.resolve(
        __dirname,
        'src/components/'
      ),
      utils: path.resolve(
        __dirname,
        'src/utils/'
      ),
    },
  },
};
