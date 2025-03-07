const { exec } = require('child_process');
exec('n8n', (err, stdout, stderr) => {
  if (err) console.error(err);
  if (stderr) console.error(stderr);
  console.log(stdout);
});
