# config/initializers/rack_deflater_patch.rb

module Rack
    class Deflater
      alias_method :original_call, :call
  
      def call(env)
        status, headers, body = original_call(env)
        if headers["Cache-Control"]
          headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
        end
        [status, headers, body]
      end
    end
  end
  