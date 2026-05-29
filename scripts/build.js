#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..');
const www = path.join(src, 'www');

if (!fs.existsSync(www)) fs.mkdirSync(www, { recursive: true });

// Copy web files to www/
const files = ['index.html', 'manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png'];
for (const f of files) {
  const from = path.join(src, f);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(www, f));
    console.log(`Copied: ${f}`);
  }
}

console.log('Build complete → www/');
