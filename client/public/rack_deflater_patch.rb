# config/initializers/rack_deflater_patch.rb
module Rack
    class Deflater
      alias_method :original_call, :call
  
      def call(env)
        status, headers, body = original_call(env)
        if headers["Cache-Control"]
          # If the Cache-Control header is a Hash, convert it to a string.
          if headers["Cache-Control"].is_a?(Hash)
            headers["Cache-Control"] = headers["Cache-Control"].to_s
          end
          # Now safely append ", no-transform"
          headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
        end
        [status, headers, body]
      end
    end
  end
  