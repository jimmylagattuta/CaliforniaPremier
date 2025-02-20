# config/initializers/rack_headerhash_patch.rb
if defined?(Rack::Utils) && !Rack::Utils.const_defined?(:HeaderHash)
  Rack::Utils.const_set(:HeaderHash, Rack::Headers)
end
