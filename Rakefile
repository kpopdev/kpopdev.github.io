require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = "https://kpopdev.github.io"
SitemapGenerator::Sitemap.public_path = './'
SitemapGenerator::Sitemap.sitemaps_path = ''
SitemapGenerator::Sitemap.compress = true # Keep it .gz (Google supports it)
SitemapGenerator::Sitemap.filename = 'sitemap'

SitemapGenerator::Sitemap.create do
  add '/', changefreq: 'daily', priority: 1.0
end
