// Convert the gold-on-black Glockner Digital master into transparent WebP
// assets sized for the site header. Treat the black as premultiplied
// background: alpha = max(R,G,B), then unpremultiply RGB so anti-aliased
// edges render at full gold on any background.

const sharp = require('sharp');
const path = require('path');

const SRC = path.resolve(
  __dirname,
  '../../glockner-digital-logo/Output/Glockner-Digital-Logo-Gold.png'
);

async function makeRgba() {
  const { data, info } = await sharp(SRC)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const mx = Math.max(r, g, b);
    if (mx < 4) {
      out[j] = 0; out[j + 1] = 0; out[j + 2] = 0; out[j + 3] = 0;
    } else {
      const f = 255 / mx; // unpremultiply
      out[j]     = Math.min(255, Math.round(r * f));
      out[j + 1] = Math.min(255, Math.round(g * f));
      out[j + 2] = Math.min(255, Math.round(b * f));
      out[j + 3] = mx;
    }
  }
  return { buffer: out, width, height };
}

async function main() {
  const { buffer, width, height } = await makeRgba();
  const base = sharp(buffer, { raw: { width, height, channels: 4 } }).trim();

  const tasks = [
    { out: 'public/logo-digital.png',     w: 800,  fmt: 'png' },
    { out: 'public/logo-digital.webp',    w: 800,  fmt: 'webp' },
    { out: 'public/logo-digital@2x.webp', w: 1600, fmt: 'webp' },
  ];

  for (const t of tasks) {
    let p = base.clone().resize({ width: t.w });
    p = t.fmt === 'webp' ? p.webp({ quality: 92, alphaQuality: 95 })
                         : p.png({ compressionLevel: 9 });
    const info = await p.toFile(t.out);
    console.log(t.out, info.width + 'x' + info.height,
                (info.size / 1024).toFixed(1) + 'KB');
  }
}

main().catch(e => { console.error(e); process.exit(1); });
