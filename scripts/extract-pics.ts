import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url || 'file://' + process.cwd() + '/');
const pdf = require('pdf-parse');

async function run() {
  const dataBuffer = fs.readFileSync('docs/Buku Program Kerja KMTETI 2026-Final.pdf');
  const data = await pdf(dataBuffer);
  const text = data.text;
  
  // We want to print context around KMTETI Mengabdi to see the 3rd person
  const lines = text.split('\n');
  const idx = lines.findIndex(l => l.includes('KMTETI Mengabdi'));
  if (idx !== -1) {
    console.log("=== KMTETI Mengabdi Context ===");
    console.log(lines.slice(Math.max(0, idx - 5), idx + 20).join('\n'));
  }
}

run().catch(console.error);
