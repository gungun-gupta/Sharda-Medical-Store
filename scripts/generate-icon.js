const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create a 180x180 RGBA buffer
const width = 180;
const height = 180;

// Color helper
const bgR = 0x2a, bgG = 0x7a, bgB = 0x9d; // #2A7A9D
const fgR = 0xff, fgG = 0xff, fgB = 0xff; // #FFFFFF

// Raw image buffer with filter byte per scanline
const rawData = Buffer.alloc((width * 4 + 1) * height);

for (let y = 0; y < height; y++) {
  const rowOffset = y * (width * 4 + 1);
  rawData[rowOffset] = 0; // Filter type 0 (None)

  for (let x = 0; x < width; x++) {
    const pixelOffset = rowOffset + 1 + x * 4;

    // Determine if (x, y) is inside the rounded rectangle
    const cornerRadius = 36;
    let inBounds = true;

    // Check 4 corners
    const checkCorner = (cx, cy) => {
      const dx = x - cx;
      const dy = y - cy;
      return dx * dx + dy * dy <= cornerRadius * cornerRadius;
    };

    if (x < cornerRadius && y < cornerRadius) {
      inBounds = checkCorner(cornerRadius, cornerRadius);
    } else if (x >= width - cornerRadius && y < cornerRadius) {
      inBounds = checkCorner(width - cornerRadius, cornerRadius);
    } else if (x < cornerRadius && y >= height - cornerRadius) {
      inBounds = checkCorner(cornerRadius, height - cornerRadius);
    } else if (x >= width - cornerRadius && y >= height - cornerRadius) {
      inBounds = checkCorner(width - cornerRadius, height - cornerRadius);
    }

    if (!inBounds) {
      rawData[pixelOffset] = 0;
      rawData[pixelOffset + 1] = 0;
      rawData[pixelOffset + 2] = 0;
      rawData[pixelOffset + 3] = 0; // transparent
      continue;
    }

    // Check if within medical plus cross
    // Horizontal bar: y in [76, 104], x in [45, 135]
    // Vertical bar: x in [76, 104], y in [45, 135]
    const inHorizBar = (y >= 76 && y <= 104 && x >= 45 && x <= 135);
    const inVertBar = (x >= 76 && x <= 104 && y >= 45 && y <= 135);

    if (inHorizBar || inVertBar) {
      rawData[pixelOffset] = fgR;
      rawData[pixelOffset + 1] = fgG;
      rawData[pixelOffset + 2] = fgB;
      rawData[pixelOffset + 3] = 255;
    } else {
      // Subtle gradient from top-left to bottom-right
      const factor = (x + y) / (width + height);
      const r = Math.round(bgR - 15 * factor);
      const g = Math.round(bgG - 25 * factor);
      const b = Math.round(bgB - 25 * factor);
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = 255;
    }
  }
}

// Compress with zlib
const deflated = zlib.deflateSync(rawData);

// Build PNG file chunks
function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuf, data]);

  // CRC32 calculation
  let crc = 0xffffffff;
  for (let i = 0; i < crcData.length; i++) {
    let byte = crcData[i];
    crc = crc ^ byte;
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  crc = (crc ^ 0xffffffff) >>> 0;

  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0);
ihdr.writeUInt32BE(height, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 6; // color type: RGBA
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // interlace

const ihdrChunk = createChunk('IHDR', ihdr);
const idatChunk = createChunk('IDAT', deflated);
const iendChunk = createChunk('IEND', Buffer.alloc(0));

const png = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);

const outPath = path.join(__dirname, '..', 'public', 'apple-touch-icon.png');
fs.writeFileSync(outPath, png);
console.log('Successfully generated public/apple-touch-icon.png (' + png.length + ' bytes)');
