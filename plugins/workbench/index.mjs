import { readFileSync } from 'node:fs';

export const name = 'lantern-workbench';
export const inject = ['webServer'];

export function apply(ctx, config) {
  const release = config.release;
  if (!['one', 'two'].includes(release)) throw new Error('Unknown workbench release');
  const css = readFileSync(new URL(`./releases/${release}.css`, import.meta.url), 'utf8');

  ctx.on('webserver/index-inject', (table) => {
    table.push({ kind: 'style', text: css });
  });

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: '/api/workbench/state',
    handler: (_request, response) => {
      response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      response.end(JSON.stringify({ release }));
    },
  }));
}
