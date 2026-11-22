import sharp from 'sharp';
import fs from 'node:fs';
const SRC = 'D:/downloads_moved/Downloads/12stepsfoundation/';
const OUT = 'public/images/';
fs.mkdirSync(OUT, { recursive: true });

// Real photographs -> web-optimised webp
const photos = {
  'hall-prayer': 'IMG-20260921-WA0005.jpg.jpeg',
  'carrom': 'IMG-20260930-WA0004.jpg.jpeg',
  'yoga': 'IMG-20260930-WA0005.jpg.jpeg',
};
for (const [name, file] of Object.entries(photos)) {
  for (const w of [1600, 800]) {
    await sharp(SRC + file).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(`${OUT}${name}-${w}.webp`);
  }
}

// Emblem: circular crop of the supplied logo
const r = 612, cx = 1230, cy = 1409;
const circle = Buffer.from(`<svg width="${r*2}" height="${r*2}"><circle cx="${r}" cy="${r}" r="${r}" fill="#fff"/></svg>`);
const crop = await sharp(SRC + 'tshirt_logo_A4_300dpi.png').extract({ left: cx - r, top: cy - r, width: r*2, height: r*2 }).toBuffer();
const emblemBuf = await sharp(crop).composite([{ input: circle, blend: 'dest-in' }]).png().toBuffer();
await sharp(emblemBuf).resize(512).png().toFile(OUT + 'emblem.png');
await sharp(emblemBuf).resize(512).webp({ quality: 90 }).toFile(OUT + 'emblem.webp');
console.log('done');
