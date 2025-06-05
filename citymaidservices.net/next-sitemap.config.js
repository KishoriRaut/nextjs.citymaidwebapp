module.exports = {
  siteUrl: 'https://citymaidservices.net',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: ['/server-sitemap.xml', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/404', '/500']
      }
    ],
    additionalSitemaps: [
      'https://citymaidservices.net/sitemap.xml',
    ],
  },
};
