# config/initializers/rack_deflater_patch.rb
module Rack
    class Deflater
      alias_method :orig_call, :call
  
      def call(env)
        status, headers, body = orig_call(env)
        if headers["Cache-Control"]
          if headers["Cache-Control"].is_a?(Hash)
            # Convert the hash to a string by joining key=value pairs.
            cc_string = headers["Cache-Control"].map { |k, v| "#{k}=#{v}" }.join(", ")
            headers["Cache-Control"] = cc_string + ", no-transform"
          else
            # If it's already a string, just append.
            headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
          end
        end
        [status, headers, body]
      end
    end
  end
  