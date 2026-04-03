/**
 * generate-blog-images.mjs
 * Generates 10 blog post images via fal.ai flux/schnell and saves them to
 * public/images/blog/ as JPEG files.
 *
 * Run from project root: node scripts/generate-blog-images.mjs
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
    filename: 'honorary-consul-role.jpg',
    prompt:
      'Professional diplomat at a mahogany desk signing official documents with a gold fountain pen, Hungarian coat of arms visible on the wall, warm amber office lighting, 35mm documentary photography, cinematic depth of field, no text',
  },
  {
    filename: 'authentication-vs-apostille.jpg',
    prompt:
      'Close-up macro photography of official document stamps and red wax seals on formal ivory paper, antique gold embossing visible, dark navy background, diplomatic credential aesthetic, no text',
  },
  {
    filename: 'dual-citizenship.jpg',
    prompt:
      'Two passports side by side on a dark navy surface — one Hungarian, one American — with autumn New England foliage softly blurred in background, documentary photography, golden hour light, no text',
  },
  {
    filename: 'passport-renewal.jpg',
    prompt:
      'Hungarian passport open to the photo page resting on a marble surface, official government stamps visible, soft directional lighting, editorial photography, no text',
  },
  {
    filename: 'birth-registration.jpg',
    prompt:
      "New parent's hands carefully holding a newborn baby with official government documents visible on a wooden desk nearby, warm natural window light, documentary photography, no text",
  },
  {
    filename: 'life-certificate.jpg',
    prompt:
      "Elderly person's weathered hands holding official correspondence envelope with a government seal visible, soft warm kitchen light, intimate documentary photography, no text",
  },
  {
    filename: 'power-of-attorney.jpg',
    prompt:
      'Two sets of hands across a professional desk — one signing a legal document while the other waits — official seals visible, cinematic corporate photography, no text',
  },
  {
    filename: 'consul-vs-consulate.jpg',
    prompt:
      'Split-tone editorial photo: intimate professional office with warm desk lamp on left, grand stone government building facade with columns on right, documentary photography, no text',
  },
  {
    filename: 'document-checklist.jpg',
    prompt:
      'Neatly organized official documents, passport, and government ID spread on a dark navy desk surface, one hand organizing them, top-down flat lay photography, gold accent pen, no text',
  },
  {
    filename: 'hungarian-community.jpg',
    prompt:
      'Warm gathering of diverse adults at an elegant community event, autumn New England setting visible through windows, soft bokeh background, documentary photography, no text',
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

  // List saved files
  console.log('\nFiles in public/images/blog/:');
  const files = fs.readdirSync(outputDir).sort();
  files.forEach((f) => {
    const stat = fs.statSync(path.join(outputDir, f));
    console.log(`  ${f}  (${(stat.size / 1024).toFixed(1)} KB)`);
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
