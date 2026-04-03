/**
 * generate-blog-images-batch2.mjs
 * Generates 3 blog post images via fal.ai flux/schnell and saves them to
 * public/images/blog/ as JPEG files.
 *
 * Run from project root: node scripts/generate-blog-images-batch2.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

// ─── Read API key from .env.local ────────────────────────────────────────────
function readApiKey() {
  const envPath = path.join(PROJECT_ROOT, '.env.local');
  const raw = fs.readFileSync(envPath, 'utf8');
  const match = raw.match(/^FAL_API_KEY=(.+)$/m);
  if (!match) throw new Error('FAL_API_KEY not found in .env.local');
  return match[1].trim();
}

// ─── Ensure output directory exists ──────────────────────────────────────────
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

// ─── Download a URL to a file path ───────────────────────────────────────────
async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download image: ${res.status} ${res.statusText}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buffer));
}

// ─── Generate one image via fal.ai ───────────────────────────────────────────
async function generateImage(apiKey, prompt) {
  const res = await fetch('https://fal.run/fal-ai/flux/schnell', {
    method: 'POST',
    headers: {
      'Authorization': `Key ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      image_size: 'landscape_16_9',
      num_inference_steps: 4,
      num_images: 1,
      enable_safety_checker: false,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`fal.ai API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  if (!data.images || !data.images[0] || !data.images[0].url) {
    throw new Error(`Unexpected API response: ${JSON.stringify(data)}`);
  }
  return data.images[0].url;
}

// ─── Image definitions ────────────────────────────────────────────────────────
const IMAGES = [
  {
    filename: 'apostille-guide.jpg',
    prompt:
      'Ornate government document with official red wax seal and gold embossed apostille stamp on ivory parchment paper, dark navy background surface, macro editorial photography, cinematic lighting, no text',
  },
  {
    filename: 'hungarian-inheritance.jpg',
    prompt:
      'Family heirloom items — antique pocket watch, folded documents, old photographs — arranged on a dark wooden desk alongside official legal papers with official seals, warm amber light, documentary photography, no text',
  },
  {
    filename: 'us-documents-valid-hungary.jpg',
    prompt:
      'Multiple official government documents — passports, certificates, legal papers — fanned out on a dark navy surface with official stamps and gold seals visible, clean flat-lay editorial photography, no text',
  },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const apiKey = readApiKey();
  const outputDir = path.join(PROJECT_ROOT, 'public', 'images', 'blog');
  ensureDir(outputDir);

  console.log(`\nGenerating ${IMAGES.length} blog images...\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < IMAGES.length; i++) {
    const { filename, prompt } = IMAGES[i];
    const destPath = path.join(outputDir, filename);
    const label = `[${i + 1}/${IMAGES.length}] ${filename}`;

    console.log(`${label} — generating...`);

    try {
      const imageUrl = await generateImage(apiKey, prompt);
      console.log(`${label} — downloading from ${imageUrl.slice(0, 60)}...`);
      await downloadImage(imageUrl, destPath);
      console.log(`${label} — saved to ${destPath}`);
      successCount++;
    } catch (err) {
      console.error(`${label} — ERROR: ${err.message}`);
      failCount++;
    }

    // Small delay between requests to avoid rate limiting
    if (i < IMAGES.length - 1) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  console.log(`\nDone. ${successCount} succeeded, ${failCount} failed.`);

  // List new files
  console.log('\nNew files saved:');
  IMAGES.forEach(({ filename }) => {
    const filePath = path.join(outputDir, filename);
    if (fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      console.log(`  ${filename}  (${(stat.size / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`  ${filename}  — NOT FOUND (generation failed)`);
    }
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
