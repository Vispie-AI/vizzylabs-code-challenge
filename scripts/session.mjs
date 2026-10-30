import { readFile } from 'node:fs/promises';

export async function connection() {
  const launch = new URL((await readFile(new URL('../.dsh-home/launch-url', import.meta.url), 'utf8')).trim());
  const origin = process.env.CHALLENGE_URL || launch.origin;
  const pageLogin = new URL('/', origin);
  pageLogin.searchParams.set('token', launch.searchParams.get('token'));
  const pageResponse = await fetch(pageLogin, { redirect: 'manual' });
  const cookie = pageResponse.headers.getSetCookie().map(value => value.split(';')[0]).join('; ');
  if (!cookie) throw new Error('Local DSH connection not ready; restart npm start and retry');
  return { origin, cookie };
}
