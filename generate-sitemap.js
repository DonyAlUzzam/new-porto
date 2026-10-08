const SITE_URL = "https://donyaluzzam.vercel.app";

const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const data = require("./json/data.json");

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: SITE_URL });

	sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
	sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.9 });
	sitemap.write({ url: "/projects", changefreq: "weekly", priority: 0.9 });
	sitemap.write({ url: "/projects/archive", changefreq: "monthly", priority: 0.5 });

	data.Projects.forEach((project) => {
		sitemap.write({
			url: `/projects/${project.slug}`,
			changefreq: "monthly",
			priority: 0.7,
		});
	});

	sitemap.end();

	const sitemapXML = (await streamToPromise(sitemap)).toString();
	fs.writeFileSync("./public/sitemap.xml", sitemapXML);

	console.log(`sitemap.xml generated with ${data.Projects.length + 4} URLs`);
}

generateSitemap();
