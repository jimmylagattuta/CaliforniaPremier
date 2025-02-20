module DeflaterPatch
    def call(env)
      status, headers, body = super(env)
      if headers["Cache-Control"]
        if headers["Cache-Control"].is_a?(Hash)
          log_message = "Cache-Control header is a Hash: #{headers['Cache-Control'].inspect}. Converting to string."
          if defined?(Rails) && Rails.respond_to?(:logger) && Rails.logger
            Rails.logger.info log_message
          else
            puts log_message
          end
          cc_string = headers["Cache-Control"].map { |k, v| "#{k}: #{v}" }.join(", ")
          headers["Cache-Control"] = cc_string + ", no-transform"
        else
          log_message = "Cache-Control header is a String: #{headers['Cache-Control']}. Appending directive."
          if defined?(Rails) && Rails.respond_to?(:logger) && Rails.logger
            Rails.logger.info log_message
          else
            puts log_message
          end
          headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
        end
      else
        log_message = "No Cache-Control header found."
        if defined?(Rails) && Rails.respond_to?(:logger) && Rails.logger
          Rails.logger.info log_message
        else
          puts log_message
        end
      end
      [status, headers, body]
    end
  end
  
  Rack::Deflater.prepend(DeflaterPatch)
  