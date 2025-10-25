import fs from 'node:fs/promises';
import path from 'node:path';
import url from 'node:url';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.resolve(projectRoot, 'public');

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const svgPath = path.join(publicDir, 'favicon.svg');
  const out16 = path.join(publicDir, 'favicon-16x16.png');
  const out32 = path.join(publicDir, 'favicon-32x32.png');
  const apple = path.join(publicDir, 'apple-touch-icon.png');
  const ico = path.join(publicDir, 'favicon.ico');

  await ensureDir(publicDir);

  if (!(await fileExists(svgPath))) {
    throw new Error(`Missing public/favicon.svg. Please add your SVG first.`);
  }

  const svgBuffer = await fs.readFile(svgPath);

  // Generate PNG variants
  await sharp(svgBuffer).resize(16, 16).png({ compressionLevel: 9 }).toFile(out16);
  await sharp(svgBuffer).resize(32, 32).png({ compressionLevel: 9 }).toFile(out32);
  await sharp(svgBuffer).resize(180, 180).png({ compressionLevel: 9 }).toFile(apple);

  // Generate ICO from multiple sizes
  const icoBuffer = await pngToIco([
    await sharp(svgBuffer).resize(16, 16).png().toBuffer(),
    await sharp(svgBuffer).resize(32, 32).png().toBuffer()
  ]);
  await fs.writeFile(ico, icoBuffer);

  console.log('Generated icons:');
  console.log(' - /favicon-16x16.png');
  console.log(' - /favicon-32x32.png');
  console.log(' - /apple-touch-icon.png');
  console.log(' - /favicon.ico');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


