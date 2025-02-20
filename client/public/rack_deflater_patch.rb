# config/initializers/rack_deflater_patch.rb
module ::Rack
    class Deflater
      instance_eval do
        if method_defined?(:call) && !method_defined?(:orig_call)
          alias_method :orig_call, :call
  
          define_method(:call) do |env|
            status, headers, body = orig_call(env)
            if headers["Cache-Control"]
              # Convert the header to a string and append ", no-transform"
              headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
            end
            [status, headers, body]
          end
        else
          # Log using Rails.logger if available; otherwise, use puts
          message = "Rack::Deflater.call not defined; skipping patch."
          if defined?(Rails) && Rails.respond_to?(:logger) && Rails.logger
            Rails.logger.info message
          else
            puts message
          end
        end
      end
    end
  end
  