const fs = require('fs');
const path = require('path');

const domain = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-3001.app.github.dev`
  : 'http://localhost:3001';

const envContent = `REACT_APP_API_URL=${domain}/api/posts\n`;

fs.writeFileSync(path.join(__dirname, '.env'), envContent, 'utf8');
console.log('.env file has been generated with the following content:');
console.log(envContent);