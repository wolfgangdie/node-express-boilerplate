const { spawn } = require('child_process');
const got = require('got');
const test = require('tape');

const env = Object.assign({}, process.env, { PORT: 5000, NODE_ENV: 'testing' });
const child = spawn('node', ['index.js'], { env });

test('responds to requests', t => {
  t.plan(3);

  child.stdout.on('data', _ => {
    (async () => {
      const response = await got(`http://127.0.0.1:${env.PORT}`);
      child.kill();
      t.false(response.error);
      t.equal(response.statusCode, 200);
      t.notEqual(response.body.indexOf('<title>Node + Express</title>'), -1);
    })();
  });
});
