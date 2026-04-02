const fs = require("fs");
const path = require("path");

// Configuración
const SITE_URL = "https://drlumban.com";
const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");
const OUTPUT_CSV_FILE = path.join(__dirname, "..", "public", "sitemap.csv");
const CURRENT_DATE = new Date().toISOString().split("T")[0];

// Todas las rutas de tu sitio con sus prioridades y frecuencias
// Incluye tanto versiones en español como en inglés
const ROUTES = [
  // Páginas principales (alta prioridad)
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/perfil", priority: 0.9, changefreq: "monthly" },
  { path: "/profile", priority: 0.9, changefreq: "monthly" },
  { path: "/contacto", priority: 0.9, changefreq: "monthly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },

  // Instalaciones y certificaciones
  { path: "/instalaciones", priority: 0.8, changefreq: "monthly" },
  { path: "/facilities", priority: 0.8, changefreq: "monthly" },
  { path: "/certificaciones", priority: 0.8, changefreq: "monthly" },
  { path: "/certifications", priority: 0.8, changefreq: "monthly" },

  // Servicios quirúrgicos (alta prioridad)
  { path: "/cirugia-microscopica", priority: 0.9, changefreq: "monthly" },
  { path: "/microscopic-surgery", priority: 0.9, changefreq: "monthly" },
  { path: "/cirugia-endoscopica", priority: 0.9, changefreq: "monthly" },
  { path: "/endoscopic-surgery", priority: 0.9, changefreq: "monthly" },
  { path: "/cirugia-antirronquido", priority: 0.9, changefreq: "monthly" },
  { path: "/anti-snoring-surgery", priority: 0.9, changefreq: "monthly" },
  { path: "/septoplastia", priority: 0.8, changefreq: "monthly" },
  { path: "/septoplasty", priority: 0.8, changefreq: "monthly" },
  { path: "/cosmetica-nariz", priority: 0.8, changefreq: "monthly" },
  { path: "/rhinoplasty", priority: 0.8, changefreq: "monthly" },

  // Condiciones médicas (media prioridad)
  { path: "/alergias", priority: 0.7, changefreq: "monthly" },
  { path: "/allergies", priority: 0.7, changefreq: "monthly" },
  { path: "/congestion-nasal", priority: 0.7, changefreq: "monthly" },
  { path: "/nasal-congestion", priority: 0.7, changefreq: "monthly" },
  { path: "/obstruccion-nasal", priority: 0.7, changefreq: "monthly" },
  { path: "/nasal-obstruction", priority: 0.7, changefreq: "monthly" },
  { path: "/perdida-audicion", priority: 0.7, changefreq: "monthly" },
  { path: "/hearing-loss", priority: 0.7, changefreq: "monthly" },
  { path: "/vertigo-mareo", priority: 0.7, changefreq: "monthly" },
  { path: "/vertigo-dizziness", priority: 0.7, changefreq: "monthly" },
  { path: "/ronquidos", priority: 0.7, changefreq: "monthly" },
  { path: "/snoring", priority: 0.7, changefreq: "monthly" },
  { path: "/problemas-garganta", priority: 0.7, changefreq: "monthly" },
  { path: "/throat-problems", priority: 0.7, changefreq: "monthly" },
  { path: "/apnea-sueno", priority: 0.7, changefreq: "monthly" },
  { path: "/sleep-apnea", priority: 0.7, changefreq: "monthly" },
  { path: "/trastornos-voz", priority: 0.7, changefreq: "monthly" },
  { path: "/voice-disorders", priority: 0.7, changefreq: "monthly" },
  { path: "/otorrinopediatria", priority: 0.8, changefreq: "monthly" },
  { path: "/pediatric-ent", priority: 0.8, changefreq: "monthly" },
  { path: "/sinusitis", priority: 0.7, changefreq: "monthly" },
  { path: "/sinusitis-en", priority: 0.7, changefreq: "monthly" },
  { path: "/garganta", priority: 0.7, changefreq: "monthly" },
  { path: "/throat", priority: 0.7, changefreq: "monthly" },
  { path: "/oido", priority: 0.7, changefreq: "monthly" },
  { path: "/ear", priority: 0.7, changefreq: "monthly" },
  { path: "/nariz", priority: 0.7, changefreq: "monthly" },
  { path: "/nose", priority: 0.7, changefreq: "monthly" },
];

// Función para limpiar y validar URLs
function cleanUrl(url) {
  // Eliminar espacios en blanco
  url = url.trim();
  // Asegurar que comienza con /
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  return url;
}

// Función para generar el sitemap.xml
function generateSitemap() {
  console.log("🚀 Generando sitemap.xml...");
  console.log(`🌐 URL base: ${SITE_URL}`);
  console.log(`📁 Archivo de salida: ${OUTPUT_FILE}`);

  // Encabezado XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Generar entradas para cada ruta
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

  // Crear directorio public si no existe
  const publicDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Escribir archivo
  fs.writeFileSync(OUTPUT_FILE, xml);

  console.log("\n🎉 Sitemap generado exitosamente!");
  console.log(`📊 Total de URLs: ${ROUTES.length}`);
  console.log(`📄 Archivo: ${OUTPUT_FILE}`);
  console.log(`🔗 URL del sitemap: ${SITE_URL}/sitemap.xml`);
}

// Generar CSV compatible con Excel a partir del sitemap
function generateSitemapCsv() {
  console.log("📊 Generando sitemap.csv (compatible con Excel)...");

  const publicDir = path.dirname(OUTPUT_CSV_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Encabezado CSV
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

// Generar robots.txt automáticamente
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

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Crawl delay para no sobrecargar el servidor
Crawl-delay: 1

# Host
Host: ${SITE_URL}`;

  fs.writeFileSync(robotsPath, robotsContent);
  console.log("🤖 robots.txt generado exitosamente!");
  console.log(`📁 Archivo: ${robotsPath}`);
}

// Función para generar un reporte de URLs
function generateUrlReport() {
  const reportPath = path.join(__dirname, "..", "public", "url-report.txt");

  const report = [];
  report.push("=".repeat(60));
  report.push("REPORTE DE URLs - DR LUMBÁN");
  report.push("=".repeat(60));
  report.push(`Fecha de generación: ${CURRENT_DATE}`);
  report.push(`Total de URLs: ${ROUTES.length}`);
  report.push("");
  report.push("URLs por categoría:");
  report.push("");

  // Agrupar por prioridad
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
    report.push(
      `   Prioridad: ${route.priority} | Frecuencia: ${route.changefreq}`,
    );
  });

  fs.writeFileSync(reportPath, report.join("\n"));
  console.log("📋 URL report generado exitosamente!");
  console.log(`📁 Archivo: ${reportPath}`);
}

// Función principal
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
    console.log(
      "📌 Recuerda: Incluir todas estas URLs en Google Search Console",
    );
  } catch (error) {
    console.error("❌ Error al generar los archivos:", error);
    process.exit(1);
  }
}

// Ejecutar la función principal
main();
