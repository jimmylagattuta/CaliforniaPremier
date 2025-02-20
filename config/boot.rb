ENV["BUNDLE_GEMFILE"] ||= File.expand_path("../Gemfile", __dir__)

require "bundler/setup" # Set up gems listed in the Gemfile.

# Patch Rack early to define Rack::Utils::HeaderHash if not already defined
require "rack"
unless Rack::Utils.const_defined?(:HeaderHash)
  Rack::Utils.const_set(:HeaderHash, Rack::Headers)
end

require "bootsnap/setup" # Speed up boot time by caching expensive operations.
