const fs = require('fs');
const js = fs.readFileSync('_temp.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('info:')) {
    // count ASCII double quotes in the line
    const quotes = (l.match(/"/g) || []).length;
    if (quotes > 2) {
      console.log('LINE ' + (i+1) + ' has ' + quotes + ' quotes:');
      console.log(l);
      console.log('---');
    }
  }
});
console.log('Scan complete');

