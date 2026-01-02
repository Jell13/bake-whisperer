export default function sitemap() {
  const baseUrl = 'https://bake-whisperer.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/confirm-order`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3, // Low priority - order confirmation page
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/finish-order`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3, // Low priority - order completion page
    },
    {
      url: `${baseUrl}/online-order`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9, // High priority - main ordering page
    },
  ];

  return staticPages;
}