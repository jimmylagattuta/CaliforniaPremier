# config/initializers/rack_deflater_patch.rb

module DeflaterPatch
    def call(env)
      status, headers, body = super(env)
      if headers["Cache-Control"]
        # If the header is a Hash, convert it to a string.
        if headers["Cache-Control"].is_a?(Hash)
          headers["Cache-Control"] = headers["Cache-Control"].map { |k, v| "#{k}=#{v}" }.join(", ") + ", no-transform"
        else
          headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
        end
      end
      [status, headers, body]
    end
  end
  
  Rack::Deflater.prepend(DeflaterPatch)
  