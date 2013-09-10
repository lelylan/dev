source 'https://rubygems.org'

ruby '1.9.3'

gem 'rails', '3.2.13'
gem 'mongoid', '~> 3.1.4'
gem 'unicorn'
gem 'devise'
gem 'rails_config'
gem 'bundler'
gem 'high_voltage'
gem 'newrelic_rpm'

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'foreman'
  gem 'brakeman', :require => false
end

group :assets do
  gem 'asset_sync'
  gem 'sass-rails'
  gem 'coffee-rails'
  gem 'uglifier'
end
