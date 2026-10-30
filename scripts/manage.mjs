import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile, rename, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { build } from './build.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const home = path.join(root, '.dsh-home');
const patch = path.join(home, 'profiles/web/cordis.patch.yml');
const nodeBin = path.dirname(process.execPath);
const env = { ...process.env, DSH_HOME: home, DSH_TELEMETRY_DISABLED: '1', PATH: [path.join(root, 'node_modules/.bin'), nodeBin, process.env.PATH].join(path.delimiter) };
const cli = path.join(root, 'node_modules/@deepseek-ai/dsh/lib/bin.js');

function run(args, captureLink = false) {
  return new Promise((resolve, reject) => {
    let stopping = false;
    const child = spawn(process.execPath, [cli, ...args], { cwd: root, env, stdio: captureLink ? ['inherit', 'pipe', 'pipe'] : 'inherit' });
    if (captureLink) {
      let pending = '';
      for (const stream of [child.stdout, child.stderr]) stream.on('data', chunk => {
        pending += chunk.toString();
        const match = pending.match(/dsh web: (https?:\/\/[^\s]+)/);
        if (match) {
          writeFile(path.join(home, 'launch-url'), match[1], { mode: 0o600 })
            .then(() => process.stdout.write(chunk))
            .catch(error => console.error(error.message));
        } else process.stdout.write(chunk);
        pending = pending.slice(-4096);
      });
    }
    for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => { stopping = true; child.kill(signal); });
    child.once('error', reject);
    child.once('exit', code => code === 0 || stopping ? resolve() : reject(new Error(`DSH exited with ${code}`)));
  });
}

async function release(value) {
  if (!['one', 'two'].includes(value)) throw new Error('Usage: npm run release -- one|two');
  await access(patch);
  await build();
  const file = path.join(root, '.artifacts/release.json');
  await mkdir(path.dirname(file), { recursive: true });
  const text = JSON.stringify({ release: value }) + '\n';
  await writeFile(file + '.tmp', text);
  await rename(file + '.tmp', file);
  console.log(`Workspace release requested: ${value}`);
}

const command = process.argv[2];
if (command === 'setup') {
  await build();
  await mkdir(home, { recursive: true });
  for (const plugin of ['workbench', 'navigation', 'editor', 'preview']) {
    await run(['plugin', '--profile', 'web', 'add', `./plugins/${plugin}`]);
  }
  await release('one');
} else if (command === 'start') {
  await access(patch);
  await run(['web', '--no-open', '--port', process.env.PORT || '3080'], true);
} else if (command === 'release') {
  await release(process.argv[3]);
} else if (command === 'reset') {
  await release('one');
} else {
  throw new Error('Use setup, start, release, or reset');
}
