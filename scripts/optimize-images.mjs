import sharp from 'sharp';
import { existsSync } from 'fs';
import { rename } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

function p(...parts) {
  return join(PUBLIC, ...parts);
}

async function toWebp(input, output, { width, height, quality = 82 } = {}) {
  if (!existsSync(input)) {
    console.warn(`⚠  Not found, skipping: ${input}`);
    return;
  }
  let pipeline = sharp(input);
  if (width || height) {
    pipeline = pipeline.resize(width ?? null, height ?? null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  await pipeline.webp({ quality }).toFile(output);
  console.log(`✓  ${output.replace(PUBLIC, '')}`);
}

async function recompress(file, { maxWidth, quality = 80 } = {}) {
  if (!existsSync(file)) {
    console.warn(`⚠  Not found, skipping: ${file}`);
    return;
  }
  const { readFile, writeFile } = await import('fs/promises');
  // Read into memory first so sharp releases the file handle before we write
  const inputBuffer = await readFile(file);
  let pipeline = sharp(inputBuffer);
  if (maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });
  }
  const outputBuffer = await pipeline.webp({ quality }).toBuffer();
  await writeFile(file, outputBuffer);
  console.log(`✓  ${file.replace(PUBLIC, '')} (recompressed)`);
}

console.log('🔧 Optimizing images...\n');

// ── JPG → WebP ──────────────────────────────────────────────────────────────
// Navbar theme buttons: displayed ~64 px, 200 px covers 3× retina
await toWebp(p('lumban 1.4.jpg'), p('lumban 1.4.webp'), { width: 200, height: 200 });
await toWebp(p('lumban 1.2.jpg'), p('lumban 1.2.webp'), { width: 200, height: 200 });
await toWebp(p('lumban 1.3.jpg'), p('lumban 1.3.webp'), { width: 200, height: 200 });

// About carousel: displayed ~380 px
await toWebp(
  p('lumban realizando una cirugia.jpg'),
  p('lumban realizando una cirugia.webp'),
  { width: 800 }
);

// Footer logo: displayed 312×192
await toWebp(p('logo.png'), p('logo.webp'), { width: 640 });

// CasesGrid nariz: displayed 300×300
await toWebp(p('nariz.png'), p('nariz.webp'), { width: 600, height: 600 });
await toWebp(p('nariz-hover.png'), p('nariz-hover.webp'), { width: 600, height: 600 });

// ── WebP recompressions ──────────────────────────────────────────────────────
// Cover images: displayed ~450×300
await recompress(p('cover-lumban-video.webp'), { maxWidth: 900, quality: 75 });
await recompress(p('cover-testimonials-video.webp'), { maxWidth: 900, quality: 75 });

// Dr. consultorio: hero trail, displayed 260 px
await recompress(p('Dr. jaime lumban en su consultorio.webp'), { maxWidth: 600, quality: 78 });

// Hero trail images: displayed 260 px
await recompress(p('lumban oido.webp'), { maxWidth: 600, quality: 78 });
await recompress(p('lumban cara.webp'), { maxWidth: 600, quality: 78 });
await recompress(p('lumban nariz.webp'), { maxWidth: 600, quality: 78 });
await recompress(p('lumban paciente.webp'), { maxWidth: 600, quality: 78 });

// Patient gallery: displayed ~300 px
await recompress(p('paciente 2.1.webp'), { maxWidth: 700, quality: 78 });
await recompress(p('paciente 3.1.webp'), { maxWidth: 700, quality: 78 });
await recompress(p('paciente 4.1.webp'), { maxWidth: 700, quality: 78 });

// Blog cover: displayed ~375 px
await recompress(
  p('blog', 'Como prepararte para una cita con el dr lumban en tijuana.webp'),
  { maxWidth: 750, quality: 78 }
);

console.log('\n✅  Done');
