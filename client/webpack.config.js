const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: require('./.terserrc'), // Load from .terserrc
        extractComments: false,
      }),
    ],
  },
};
