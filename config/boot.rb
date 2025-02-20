ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.
require "rack"

# Patch Rack::Utils::HeaderHash if needed (optional if nothing depends on it)
unless Rack::Utils.const_defined?(:HeaderHash)
  Rack::Utils.const_set(:HeaderHash, Rack::Headers)
end

# Monkey-patch Rack::Deflater to handle Cache-Control correctly
module Rack
  class Deflater
    alias_method :orig_call, :call
    def call(env)
      status, headers, body = orig_call(env)
      if headers["Cache-Control"]
        # If Cache-Control is a Hash, convert it to a string.
        if headers["Cache-Control"].is_a?(Hash)
          headers["Cache-Control"] = headers["Cache-Control"].map { |k, v| "#{k}=#{v}" }.join(", ")
        end
        # Now safely append ", no-transform"
        headers["Cache-Control"] = headers["Cache-Control"].to_s + ", no-transform"
      end
      [status, headers, body]
    end
  end
end

require "bootsnap/setup" # Speed up boot time by caching expensive operations.
