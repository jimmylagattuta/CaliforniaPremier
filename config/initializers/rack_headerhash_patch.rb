# config/initializers/rack_headerhash_patch.rb
unless defined?(Rack::Utils::HeaderHash)
    Rack::Utils::HeaderHash = Rack::Headers
  end
  