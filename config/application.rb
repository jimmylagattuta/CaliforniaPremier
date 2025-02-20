require_relative "boot"

require "rails"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie" # if you're using assets
require 'rack/brotli'  # loads Rack::Brotli middleware

# Require the gems listed in Gemfile, including any gems you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Californiapremier
  class Application < Rails::Application
    config.load_defaults 7.2

    # Insert our patch for Rack::Deflater before adding it to the middleware stack.
    module Rack
      class Deflater
        alias_method :orig_call, :call

        def call(env)
          status, headers, body = orig_call(env)
          if headers["Cache-Control"]
            if headers["Cache-Control"].is_a?(Hash)
              # Convert the hash to a string by joining key=value pairs
              cc_string = headers["Cache-Control"].map { |k, v| "#{k}=#{v}" }.join(", ")
              headers["Cache-Control"] = cc_string + ", no-transform"
            else
              headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
            end
          end
          [status, headers, body]
        end
      end
    end

    # Existing configuration
    config.autoload_lib(ignore: %w[assets tasks])
    config.action_dispatch.default_headers = {
      'Cross-Origin-Resource-Policy' => 'same-site'
    }

    # Enable Brotli compression for text assets
    if defined?(Rack::Brotli)
      config.middleware.use Rack::Brotli, quality: 5, extensions: ['.html', '.js', '.css', '.svg', '.json']
    end

    # Insert Rack::Deflater (our patched version) after Rack::Brotli
    config.middleware.insert_after Rack::Brotli, Rack::Deflater

    # Additional configuration...
  end
end
