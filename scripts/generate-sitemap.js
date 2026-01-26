const fs = require("fs");
const path = require("path");

// Configuración
const SITE_URL = "https://drlumban.netlify.app";
const OUTPUT_FILE = path.join(__dirname, "..", "public", "sitemap.xml");
const CURRENT_DATE = new Date().toISOString().split("T")[0];

// Todas las rutas de tu sitio con sus prioridades
const ROUTES = [
  // Páginas principales (alta prioridad)
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/perfil", priority: 0.9, changefreq: "monthly" },
  { path: "/contacto", priority: 0.9, changefreq: "monthly" },

  // Instalaciones y certificaciones
  { path: "/instalaciones", priority: 0.8, changefreq: "monthly" },
  { path: "/certificaciones", priority: 0.8, changefreq: "monthly" },

  // Servicios quirúrgicos (alta prioridad)
  { path: "/cirugia-microscopica", priority: 0.9, changefreq: "monthly" },
  { path: "/cirugia-endoscopica", priority: 0.9, changefreq: "monthly" },
  { path: "/cirugia-anitrronquido", priority: 0.9, changefreq: "monthly" },
  { path: "/septoplastia", priority: 0.8, changefreq: "monthly" },
  { path: "/cosmetica-nariz", priority: 0.8, changefreq: "monthly" },

  // Condiciones médicas (media prioridad)
  { path: "/alergias", priority: 0.7, changefreq: "monthly" },
  { path: "/congestion-nasal", priority: 0.7, changefreq: "monthly" },
  { path: "/obstruccion-nasal", priority: 0.7, changefreq: "monthly" },
  { path: "/perdida-audicion", priority: 0.7, changefreq: "monthly" },
  { path: "/vertigo-mareo", priority: 0.7, changefreq: "monthly" },
  { path: "/ronquidos", priority: 0.7, changefreq: "monthly" },
  { path: "/problemas-garganta", priority: 0.7, changefreq: "monthly" },
  { path: "/apnea-sueno", priority: 0.7, changefreq: "monthly" },
  { path: "/trastornos-voz", priority: 0.7, changefreq: "monthly" },
  { path: "/otorrinopediatria", priority: 0.8, changefreq: "monthly" },
  { path: "/sinusitis", priority: 0.7, changefreq: "monthly" },
];

function generateSitemap() {
  console.log("🚀 Generando sitemap.xml...");
  console.log(`🌐 URL base: ${SITE_URL}`);
  console.log(`📁 Archivo de salida: ${OUTPUT_FILE}`);

  // Encabezado XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Generar entradas para cada ruta
  ROUTES.forEach((route) => {
    const fullUrl = `${SITE_URL}${route.path}`;

    xml += "  <url>\n";
    xml += `    <loc>${fullUrl}</loc>\n`;
    xml += `    <lastmod>${CURRENT_DATE}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += "  </url>\n";

    console.log(`✅ Añadida: ${route.path} (prioridad: ${route.priority})`);
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

// Generar robots.txt automáticamente
function generateRobotsTxt() {
  const robotsPath = path.join(__dirname, "..", "public", "robots.txt");
  const robotsContent = `User-agent: *
Allow: /
Disallow: /_next/
Disallow: /Components/
Disallow: /*.json$
Disallow: /*.js$

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(robotsPath, robotsContent);
  console.log("🤖 robots.txt generado exitosamente!");
}

// Ejecutar ambas funciones
generateSitemap();
generateRobotsTxt();
