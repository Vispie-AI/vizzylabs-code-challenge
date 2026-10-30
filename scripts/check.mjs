import assert from 'node:assert/strict';
import { connection } from './session.mjs';

const { origin, cookie } = await connection();
const state = await fetch(`${origin}/api/workbench/state`, { headers: { Cookie: cookie } });
assert.equal(state.status, 200, 'Workbench service responds');
const value = await state.json();
assert.ok(['one', 'two'].includes(value.release), 'Known workspace release');
const page = await fetch(origin, { headers: { Cookie: cookie } });
assert.equal(page.status, 200, 'Harness page responds');
assert.match(await page.text(), /<html[\s>]/i);
console.log(`Environment ready (${value.release}). This checks setup, not the reported UI issue.`);
