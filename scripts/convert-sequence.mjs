import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(process.cwd(), 'public', 'Dashboard Sequence');
const outputDir = path.join(process.cwd(), 'public', 'Dashboard Sequence WebP');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

async function convertAll() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 75, effort: 4 }) // Optimized for size & speed
      .toFile(outputPath);
  }
  console.log(`Conversion complete! Converted ${files.length} frames.`);
}

convertAll().catch(console.error);
