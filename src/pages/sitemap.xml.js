import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const siteUrl = context.site || 'https://lomelocks.netlify.app';

  const staticPages = [
    '',
    '/prestations',
    '/galerie',
    '/blog',
    '/a-propos',
    '/contact',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/blog/categorie/conseils-entretien',
    '/blog/categorie/soins-naturels',
    '/blog/categorie/routine-de-nuit',
    '/blog/categorie/faq',
  ];

  const staticUrlsXml = staticPages
    .map(
      (path) => `
  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : path === '/prestations' ? '0.9' : '0.8'}</priority>
  </url>`
    )
    .join('');

  const blogUrlsXml = posts
    .map(
      (post) => `
  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${post.data.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrlsXml}
${blogUrlsXml}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
