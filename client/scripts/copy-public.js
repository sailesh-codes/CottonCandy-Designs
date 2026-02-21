import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../public');
const destDir = path.join(__dirname, '../dist');

// Ensure the destination directory exists
await fs.ensureDir(destDir);

// Copy the public directory to the dist directory
try {
  await fs.copy(srcDir, destDir, { overwrite: true });
  console.log('✅ Public files copied to dist directory');
} catch (error) {
  console.error('❌ Error copying public files:', error);
  process.exit(1);
}
