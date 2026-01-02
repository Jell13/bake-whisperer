export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/checkout/',
          '/account/',
          '/cart/',
        ],
      },
    ],
    sitemap: 'https://bake-whisperer.com/sitemap.xml',
  };
}