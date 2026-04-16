const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');
const scriptStart = content.indexOf('<script>') + '<script>'.length;
const scriptEnd = content.lastIndexOf('</script>');
const js = content.slice(scriptStart, scriptEnd);
const lines = js.split('\n');

// Find exact error line
let lastOk = 0;
for (let i = 1; i <= lines.length; i++) {
  try {
    new Function(lines.slice(0, i).join('\n'));
    lastOk = i;
  } catch(e) {
    if (i > lastOk + 1) {
      console.log('Error at JS line', i, ':', lines[i-1].substring(0, 150));
      // Show char codes of suspicious characters
      const suspicious = lines[i-1];
      for (let c = 0; c < suspicious.length; c++) {
        const code = suspicious.charCodeAt(c);
        if (code > 127 && code < 19968) { // non-ASCII, non-CJK
          console.log('  Suspicious char at col', c, ': U+' + code.toString(16).toUpperCase(), '=', suspicious[c]);
        }
      }
      break;
    }
  }
}
console.log('Done checking.');

