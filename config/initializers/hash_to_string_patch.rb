# config/initializers/hash_to_str_patch.rb
class Hash
    def to_str
      # Check if the hash looks like a response header hash by verifying it has common header keys
      common_header_keys = %w[last-modified content-type Cache-Control content-length]
      if (common_header_keys - self.keys.map(&:to_s)).empty?
        # Convert each key/value pair into a string like "key: value" and join them with a comma
        self.map { |k, v| "#{k}: #{v}" }.join(", ")
      else
        # Fallback to default string representation if it's not a header hash
        to_s
      end
    end
  end
  
  puts "[HashPatch] Overridden Hash#to_str for header conversion."
  