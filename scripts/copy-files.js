// this script copies the necessary files that Git Proxy requires to run
// into the dist directory after tsc has compiled the typescript files
const fs = require('fs');
const path = require('path');

const files = [
  'package.json',
  'config.schema.json',
  'proxy.config.json',
  'certs/key.pem',
  'certs/cert.pem',
];

const tsconfig = fs.readFileSync('tsconfig.json', 'utf8');

const distDir = JSON.parse(tsconfig).compilerOptions.outDir;

console.log('Copying required files to dist directory', distDir);

files.forEach(file => {
  if (!fs.existsSync(path.dirname(path.join(distDir, file)))) {
    fs.mkdirSync(path.dirname(path.join(distDir, file)), { recursive: true });
  }
  fs.copyFileSync(file, path.join(distDir, file));
});
