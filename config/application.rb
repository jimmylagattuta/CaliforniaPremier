require_relative "boot"

require "rails"
require "action_controller/railtie" 
require "action_mailer/railtie"
require "sprockets/railtie" # If you're using assets
require 'rack/brotli'  # Add this to load Rack::Brotli middleware

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Californiapremier
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.2

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_lib(ignore: %w[assets tasks])
    config.action_dispatch.default_headers = {
      'Cross-Origin-Resource-Policy' => 'same-site'
    }

        # Enable Brotli compression for text assets
    if defined?(Rack::Brotli)
      config.middleware.use Rack::Brotli, quality: 5, extensions: ['.html', '.js', '.css', '.svg', '.json']
    end

    # Enable Gzip as a fallback
    config.middleware.insert_after Rack::Brotli, Rack::Deflater
    
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
