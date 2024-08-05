import { sql } from '@vercel/postgres';

import type { User } from '@/lib/definitions';

import { seed } from './seed';

export async function getUser(email: string): Promise<User | undefined> {
  /*
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    const errMsg = (error as Error)?.message || String(error);
    const msg = ['Failed to fetch user', errMsg].filter(Boolean).join(': ');
    const err = new Error(msg);
    console.error('[getUser]', msg, {
      error,
    });
    throw err;
  }
  */

  try {
    const users = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    const user = users.rows[0];
    console.log('[getUser] Fetched data', {
      user,
      users,
    });
    return user;
  } catch (error) {
    const errMsg = (error as Error)?.message || String(error);
    if (errMsg.includes('relation "users" does not exist')) {
      console.log('[getUser] Table does not exist, creating and seeding it with dummy data now...');
      // Table hasn't been created yet
      await seed();
      console.log('[getUser] Already seeded');
      const users = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      const user = users.rows[0];
      console.log('[getUser] Fetched seeded data', {
        user,
        users,
      });
      return user;
    }
    const msg = ['Failed to fetch user', errMsg].filter(Boolean).join(': ');
    const err = new Error(msg);
    console.error('[getUser] error', msg, {
      error,
    });
    debugger;
    throw err;
  }
}
