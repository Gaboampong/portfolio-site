import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../public/', import.meta.url));
const svg = await readFile(root + 'favicon.svg');

// Render PNGs from the SVG
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const png180 = await sharp(svg).resize(180, 180).png().toBuffer();

await writeFile(root + 'apple-touch-icon.png', png180);
await writeFile(root + 'favicon-32.png', png32);

// Wrap the 32x32 PNG in a single-image .ico (PNG-in-ICO, supported by modern browsers + Windows)
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2); // color palette
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(png32.length, 8); // size of image data
entry.writeUInt32LE(6 + 16, 12); // offset of image data

await writeFile(root + 'favicon.ico', Buffer.concat([header, entry, png32]));

console.log('Generated favicon.ico, favicon-32.png, apple-touch-icon.png');
