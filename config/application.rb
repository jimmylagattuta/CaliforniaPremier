require_relative "boot"

require "rails"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie" # if you're using assets
require 'rack/brotli'  # loads Rack::Brotli middleware

Bundler.require(*Rails.groups)

module Californiapremier
  class Application < Rails::Application
    config.load_defaults 7.2

    # Patch Rack::Deflater early to safely append to Cache-Control
    module ::Rack
      class Deflater
        instance_eval do
          if method_defined?(:call) && !method_defined?(:orig_call)
            alias_method :orig_call, :call

            define_method(:call) do |env|
              status, headers, body = orig_call(env)
              if headers["Cache-Control"]
                headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
              end
              [status, headers, body]
            end
          else
            # Use puts instead of Rails.logger since it might not be available
            puts "Rack::Deflater.call not defined; skipping patch."
          end
        end
      end
    end

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
