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

    # Patch Rack::Deflater early to safely append to Cache-Control with verbose logging.
    module ::Rack
      class Deflater
        instance_eval do
          puts "[RackDeflaterPatch] Starting patch of Rack::Deflater."
          if method_defined?(:call) && !method_defined?(:orig_call)
            alias_method :orig_call, :call
            puts "[RackDeflaterPatch] Aliased original call method to orig_call."

            define_method(:call) do |env|
              puts "[RackDeflaterPatch] Invoked patched call method."
              status, headers, body = orig_call(env)
              if headers["Cache-Control"]
                puts "[RackDeflaterPatch] Found Cache-Control header: #{headers['Cache-Control'].inspect}"
                if headers["Cache-Control"].is_a?(Hash)
                  cc_string = headers["Cache-Control"].map { |k, v| "#{k}: #{v}" }.join(", ")
                  puts "[RackDeflaterPatch] Converted Cache-Control from Hash to String: #{cc_string}"
                  headers["Cache-Control"] = cc_string + ", no-transform"
                else
                  puts "[RackDeflaterPatch] Cache-Control header is a string: #{headers['Cache-Control']}"
                  headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
                end
                puts "[RackDeflaterPatch] New Cache-Control header: #{headers['Cache-Control']}"
              else
                puts "[RackDeflaterPatch] No Cache-Control header found."
              end
              [status, headers, body]
            end
            puts "[RackDeflaterPatch] Patch applied successfully."
          else
            puts "[RackDeflaterPatch] Rack::Deflater.call not defined or already patched; skipping patch."
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

    # Insert our patched Rack::Deflater after Rack::Brotli
    config.middleware.insert_after Rack::Brotli, Rack::Deflater

    # Additional configuration...
  end
end
