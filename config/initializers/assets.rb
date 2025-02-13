require 'uglifier'
require 'brotli'

Rails.application.config.assets.configure do |env|
  # Use Uglifier for JavaScript compression with ES6+ support
  env.js_compressor = Uglifier.new(
    harmony: true, 
    mangle: true, 
    compress: {
      ecma: 2020, # Support modern JS syntax
    }
  )

  # Use Sass for CSS compression
  env.css_compressor = :sass

  # Register Brotli Compressor for assets
  env.register_compressor('application/javascript', :brotli, Class.new do
    def compress(input)
      Brotli.deflate(input[:data], quality: 5)
    end
  end.new)

  env.register_compressor('text/css', :brotli, Class.new do
    def compress(input)
      Brotli.deflate(input[:data], quality: 5)
    end
  end.new)
end

# Enable asset digest for cache busting
Rails.application.config.assets.digest = true

# Serve static assets in production
Rails.application.config.public_file_server.enabled = true

# Version of assets to expire old assets
Rails.application.config.assets.version = '1.0'
