const fs = require("fs");
const path = require("path");
const { SITE_URL, ROUTES } = require("../lib/sitemap-routes");

const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");
const OUTPUT_CSV_FILE = path.join(__dirname, "..", "public", "sitemap.csv");
const CURRENT_DATE = new Date().toISOString().split("T")[0];

function cleanUrl(url) {
  url = url.trim();
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  return url;
}

function generateSitemap() {
  console.log("🚀 Generando sitemap.xml...");
  console.log(`🌐 URL base: ${SITE_URL}`);
  console.log(`📁 Archivo de salida: ${OUTPUT_FILE}`);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  ROUTES.forEach((route) => {
    const cleanRoutePath = cleanUrl(route.path);
    const fullUrl = `${SITE_URL}${cleanRoutePath}`;

    xml += "  <url>\n";
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += "  </url>\n";

    console.log(`✅ Añadida: ${cleanRoutePath} (prioridad: ${route.priority})`);
  });

  xml += "</urlset>";

  const publicDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, xml);

  console.log("\n🎉 Sitemap generado exitosamente!");
  console.log(`📊 Total de URLs: ${ROUTES.length}`);
  console.log(`📄 Archivo: ${OUTPUT_FILE}`);
  console.log(`🔗 URL del sitemap: ${SITE_URL}/sitemap.xml`);
}

function generateSitemapCsv() {
  console.log("📊 Generando sitemap.csv...");

  const publicDir = path.dirname(OUTPUT_CSV_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const header = "loc,lastmod,changefreq,priority\n";

  const rows = ROUTES.map((route) => {
    const cleanRoutePath = cleanUrl(route.path);
    const fullUrl = `${SITE_URL}${cleanRoutePath}`;
    return [fullUrl, CURRENT_DATE, route.changefreq, route.priority].join(",");
  });

  const csvContent = header + rows.join("\n");

  fs.writeFileSync(OUTPUT_CSV_FILE, csvContent);

  console.log("✅ sitemap.csv generado exitosamente!");
  console.log(`📁 Archivo: ${OUTPUT_CSV_FILE}`);
  console.log(`📊 Total de URLs en CSV: ${ROUTES.length}`);
}

function generateRobotsTxt() {
  const robotsPath = path.join(__dirname, "..", "public", "robots.txt");
  const robotsContent = `User-agent: *
Allow: /
Disallow: /_next/
Disallow: /Components/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.js$
Disallow: /*.css$

Sitemap: ${SITE_URL}/sitemap.xml

Crawl-delay: 1

Host: ${SITE_URL}`;

  fs.writeFileSync(robotsPath, robotsContent);
  console.log("🤖 robots.txt generado exitosamente!");
  console.log(`📁 Archivo: ${robotsPath}`);
}

function generateUrlReport() {
  const reportPath = path.join(__dirname, "..", "public", "url-report.txt");

  const report = [];
  report.push("=".repeat(60));
  report.push("REPORTE DE URLs - DR LUMBÁN");
  report.push("=".repeat(60));
  report.push(`Fecha de generación: ${CURRENT_DATE}`);
  report.push(`Total de URLs: ${ROUTES.length}`);
  report.push("");

  const byPriority = {
    high: ROUTES.filter((r) => r.priority >= 0.9),
    medium: ROUTES.filter((r) => r.priority >= 0.7 && r.priority < 0.9),
    low: ROUTES.filter((r) => r.priority < 0.7),
  };

  report.push(`Alta prioridad (>=0.9): ${byPriority.high.length} URLs`);
  report.push(`Media prioridad (0.7-0.9): ${byPriority.medium.length} URLs`);
  report.push(`Baja prioridad (<0.7): ${byPriority.low.length} URLs`);
  report.push("");
  report.push("-".repeat(60));
  report.push("LISTA COMPLETA DE URLs:");
  report.push("-".repeat(60));

  ROUTES.forEach((route, index) => {
    const cleanRoutePath = cleanUrl(route.path);
    report.push(`${index + 1}. ${cleanRoutePath}`);
    report.push(`   Prioridad: ${route.priority} | Frecuencia: ${route.changefreq}`);
  });

  fs.writeFileSync(reportPath, report.join("\n"));
  console.log("📋 URL report generado exitosamente!");
  console.log(`📁 Archivo: ${reportPath}`);
}

function main() {
  console.log("=".repeat(60));
  console.log("GENERADOR DE SITEMAP - DR LUMBÁN");
  console.log("=".repeat(60));
  console.log("");

  try {
    generateSitemap();
    console.log("");
    generateSitemapCsv();
    console.log("");
    generateRobotsTxt();
    console.log("");
    generateUrlReport();
    console.log("");
    console.log("=".repeat(60));
    console.log("✅ TODOS LOS ARCHIVOS GENERADOS EXITOSAMENTE!");
    console.log("=".repeat(60));
    console.log("");
    console.log("Archivos generados:");
    console.log(`1. ${OUTPUT_FILE}`);
    console.log(`2. ${OUTPUT_CSV_FILE}`);
    console.log(`3. ${path.join(__dirname, "..", "public", "robots.txt")}`);
    console.log(`4. ${path.join(__dirname, "..", "public", "url-report.txt")}`);
    console.log("");
    console.log("📌 Recuerda: Incluir todas estas URLs en Google Search Console");
  } catch (error) {
    console.error("❌ Error al generar los archivos:", error);
    process.exit(1);
  }
}

main();