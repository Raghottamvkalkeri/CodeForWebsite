import { createWriteStream } from 'fs';
import fetch from 'node-fetch';
import { SitemapStream } from 'sitemap';

const sitemap = new SitemapStream({ hostname: 'https://avetoconsulting.com' });
const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);



// 1️⃣ Static routes
const staticRoutes = ['/', '/about', '/contact', '/services', '/casestudy'];
staticRoutes.forEach(route => {
  sitemap.write({ url: route, changefreq: 'daily', priority: 1.0 });
});

// 2️⃣ Add dynamic service routes
async function addServiceRoutes() {
  try {
    const res = await fetch('https://avetoconsulting.com/apis/services.php');
    const services = await res.json();
    services.forEach(service => {
      sitemap.write({
        url: `/services/${service}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    });
  } catch (err) {
    console.error('❌ Error fetching services:', err);
  }
}

// 3️⃣ Add dynamic case study routes (paginated)
async function addCaseStudyRoutes() {
  try {
    // 3a. Fetch categories
    const categoriesRes = await fetch('https://avetoconsulting.com/apis/casestudy_categories.php');
    const categories = await categoriesRes.json();

    for (const category of categories) {
      let pageNum = 1;
      let hasMore = true;

      while (hasMore) {
        const url = `https://avetoconsulting.com/apis/casestudiespagination.php?page=${pageNum}&per_page=6&category=${category.id}`;
        const res = await fetch(url);
const contentType = res.headers.get('content-type');

if (!contentType || !contentType.includes('application/json')) {
  const text = await res.text();
  console.warn(`⚠️ Skipping invalid JSON response for ${url}\n${text.slice(0,200)}...`);
  break; // stop pagination for this category
}

const data = await res.json();

        if (!Array.isArray(data) || data.length === 0) {
          hasMore = false;
          break;
        }

        data.forEach(item => {
          sitemap.write({
            url: `/casestudy/${item.id}-${item.slug}`,
            changefreq: 'weekly',
            priority: 0.9,
          });
        });

        pageNum++;
      }
    }
  } catch (err) {
    console.error('❌ Error fetching case studies:', err);
  }
}

// 4️⃣ Generate sitemap
async function generateSitemap() {
  await addServiceRoutes();
  // await addCaseStudyRoutes();

  sitemap.end();
  console.log('✅ Sitemap with dynamic services + case studies generated!');
}

generateSitemap();