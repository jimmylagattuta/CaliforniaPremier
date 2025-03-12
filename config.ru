# This file is used by Rack-based servers to start the application.
require_relative "config/environment"

# Serve precompressed .br and .gz assets
use Rack::Static,
  urls: [""], root: "public",
  header_rules: [
    [:all, {'Cache-Control' => 'public, max-age=31536000'}],
    ['.br', { 'Content-Encoding' => 'br' }],
    ['.gz', { 'Content-Encoding' => 'gzip' }]
  ]

run Rails.application
