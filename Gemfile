source "https://rubygems.org"


gem "jekyll", '~> 3.9.0'

# Select Theme
gem "minima"

gem "html-proofer"
gem "sass"
gem 'github-pages', '~> 212'

# Plugins
group :jekyll_plugins do
  gem "jekyll-github-metadata"
  gem "jekyll-octicons"
  gem "jemoji"
  gem 'rake'
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem "jekyll-feed"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?