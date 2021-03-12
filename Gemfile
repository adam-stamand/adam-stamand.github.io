source "https://rubygems.org"


gem "jekyll", "~> 3.8.5"

# Select Theme
gem "minima", "~> 2.0"

gem "html-proofer"
gem "sass"

# Plugins
group :jekyll_plugins do
  gem "jekyll-github-metadata"
  gem "jekyll-octicons"
  gem "jemoji"
  gem 'rake'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'github-pages'
  gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?