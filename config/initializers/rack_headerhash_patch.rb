# config/initializers/rack_deflater_patch.rb

# Patch Rack::Deflater to safely append ', no-transform' to Cache-Control if it's a string.
module Rack
    class Deflater
      alias_method :original_call, :call
  
      def call(env)
        status, headers, body = original_call(env)
        if headers["Cache-Control"].is_a?(String)
          headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
        end
        [status, headers, body]
      end
    end
  end
  