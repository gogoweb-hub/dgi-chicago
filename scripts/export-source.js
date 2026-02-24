const fs = require('fs');
const path = require('path');

const ROOT = '/vercel/share/v0-project';

const files = [
  'package.json',
  'next.config.mjs',
  'tsconfig.json',
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'app/sitemap.ts',
  'app/robots.ts',
  'app/info-fee/page.tsx',
  'app/credit-card/page.tsx',
  'app/card-cash/page.tsx',
  'app/policy-default/page.tsx',
  'app/tools/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/contact/page.tsx',
  'app/about/page.tsx',
  'app/terms/page.tsx',
  'app/privacy/page.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/FloatingCta.tsx',
  'components/ReadingProgress.tsx',
  'components/TableOfContents.tsx',
  'components/FaqAccordion.tsx',
  'components/SubpageLayout.tsx',
  'components/CtaBanner.tsx',
  'components/HeroSection.tsx',
  'components/WhatIsSection.tsx',
  'components/HowItWorksSection.tsx',
  'components/FeesSection.tsx',
  'components/FaqSection.tsx',
  'components/ToolsSection.tsx',
  'components/InternalLinksSection.tsx',
  'lib/posts.ts',
  'lib/utils.ts',
];

let output = '';
output += '='.repeat(80) + '\n';
output += '  CHICAGO PAY - PRODUCTION SOURCE CODE EXPORT\n';
output += '  Generated: ' + new Date().toISOString() + '\n';
output += '='.repeat(80) + '\n\n';

console.log('[v0] ROOT:', ROOT);
console.log('[v0] exists ROOT:', fs.existsSync(ROOT));
console.log('[v0] cwd:', process.cwd());
console.log('[v0] __dirname:', __dirname);
const testPath = path.join(ROOT, 'package.json');
console.log('[v0] test package.json:', testPath, fs.existsSync(testPath));

let count = 0;
for (const file of files) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) { console.log('[v0] SKIP:', fullPath); continue; }
  const content = fs.readFileSync(fullPath, 'utf-8');
  count++;
  output += '/' + '/'.repeat(79) + '\n';
  output += '// FILE: ' + file + '\n';
  output += '/' + '/'.repeat(79) + '\n';
  output += content + '\n\n';
}

console.log(output);
console.log('--- EXPORTED ' + count + ' FILES ---');
