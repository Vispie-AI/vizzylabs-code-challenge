import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

export const name = 'lantern-workbench';
export const inject = ['webServer'];
const root = new URL('../../', import.meta.url);

function delivery() {
  const text = readFileSync(new URL('fixtures/delivery.json', root), 'utf8');
  return { rules: JSON.parse(text), revision: createHash('sha256').update(text).digest('hex').slice(0, 12) };
}

export function apply(ctx) {
  function route(path, handler) {
    ctx.effect(() => ctx.webServer.register({ kind: 'exact', path, handler }));
  }
  route('/api/workbench/state', (_request, response) => {
    const { release } = JSON.parse(readFileSync(new URL('.artifacts/release.json', root), 'utf8'));
    response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    response.end(JSON.stringify({ release, delivery: delivery().revision }));
  });
  for (const plugin of ['navigation', 'editor', 'preview']) {
    for (const release of ['one', 'two']) {
      route(`/workbench-assets/${plugin}/${release}.mjs`, (_request, response) => {
        const unavailable = delivery().rules.unavailable.some(rule => rule.plugin === plugin && rule.release === release);
        response.writeHead(unavailable ? 503 : 200, { 'Content-Type': 'text/javascript', 'Cache-Control': 'no-store' });
        response.end(unavailable ? '/* Asset temporarily unavailable. */' : readFileSync(new URL(`plugins/${plugin}/lib/${release}.mjs`, root), 'utf8'));
      });
    }
  }
}
