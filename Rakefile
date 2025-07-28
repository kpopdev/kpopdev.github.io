require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'https://kpopdev.github.io'
SitemapGenerator::Sitemap.public_path = './'
SitemapGenerator::Sitemap.sitemaps_path = ''
SitemapGenerator::Sitemap.create_index = false
SitemapGenerator::Sitemap.compress = true # This will make it sitemap.xml.gz 

SitemapGenerator::Sitemap.create do
  add '/', changefreq: 'weekly', priority: 1.0
end
