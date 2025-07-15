#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing project for StackBlitz deployment...');

// Copy the stackblitz-specific package.json
const stackblitzPackage = path.join(__dirname, 'stackblitz-package.json');
const mainPackage = path.join(__dirname, 'package.json');

if (fs.existsSync(stackblitzPackage)) {
  fs.copyFileSync(stackblitzPackage, mainPackage);
  console.log('✅ Updated package.json for StackBlitz compatibility');
} else {
  console.log('⚠️  stackblitz-package.json not found');
}

// Ensure main.tsx exists
const mainTsx = path.join(__dirname, 'src', 'main.tsx');
if (!fs.existsSync(mainTsx)) {
  const mainContent = `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`;
  
  fs.writeFileSync(mainTsx, mainContent);
  console.log('✅ Created src/main.tsx');
}

// Ensure index.html has the correct structure
const indexHtml = path.join(__dirname, 'index.html');
const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zignal Counter Examples</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

fs.writeFileSync(indexHtml, htmlContent);
console.log('✅ Updated index.html');

console.log('🎉 Project ready for StackBlitz!');
console.log('');
console.log('Next steps:');
console.log('1. Zip the entire counter-app folder');
console.log('2. Go to https://stackblitz.com');
console.log('3. Click "Import project" and upload the zip');
console.log('4. Or push to GitHub and use: https://stackblitz.com/github/YOUR_USERNAME/YOUR_REPO/tree/main/counter-app');