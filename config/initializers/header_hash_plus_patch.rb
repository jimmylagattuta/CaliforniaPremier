if defined?(Rack::Utils::HeaderHash)
    class Rack::Utils::HeaderHash < Hash
      def +(other)
        # Convert self to a string and concatenate with the other string
        to_s + other.to_s
      end
  
      def to_s
        # Join all key/value pairs as "key: value" separated by commas
        map { |k, v| "#{k}: #{v}" }.join(", ")
      end
    end
    puts "[HeaderHashPatch] Overridden Rack::Utils::HeaderHash#+ and to_s methods."
  else
    puts "[HeaderHashPatch] Rack::Utils::HeaderHash is not defined; skipping patch."
  end
  