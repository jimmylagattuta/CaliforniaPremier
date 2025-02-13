# config/initializers/assets.rb

# Ignore React assets in client/ from Rails asset pipeline
Rails.application.config.assets.paths << Rails.root.join('app', 'assets')

# Do not include React build output in Rails assets compilation
Rails.application.config.assets.precompile -= %w( client/* )
