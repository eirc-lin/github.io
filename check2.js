const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('index.html', 'utf8');
const scriptStart = content.indexOf('<script>') + '<script>'.length;
const scriptEnd = content.lastIndexOf('</script>');
const js = content.slice(scriptStart, scriptEnd);

// Write JS to temp file to check
fs.writeFileSync('_temp.js', js, 'utf8');

// Try to compile
try {
  new vm.Script(js);
  console.log('JS syntax OK');
} catch(e) {
  console.log('JS SYNTAX ERROR:', e.message);
  // show line context
  const lines = js.split('\n');
  const match = e.message.match(/line (\d+)/);
  if (match) {
    const ln = parseInt(match[1]);
    for (let i = Math.max(0, ln-3); i < Math.min(lines.length, ln+2); i++) {
      console.log((i+1 === ln ? '>>' : '  ') + ' [' + (i+1) + '] ' + lines[i]);
    }
  }
}

