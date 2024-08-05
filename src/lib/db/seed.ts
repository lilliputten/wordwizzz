import { sql } from '@vercel/postgres';

export async function seed() {
  console.log('[seed]');

  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255),
      image VARCHAR(255),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;

  console.log(`[seed:seed] Created "users" table`);

  const users = await Promise.all([
    sql`
          INSERT INTO users (name, email, password)
          VALUES ('John Lennon', 'lilliputten@gmail.com', '123456')
          ON CONFLICT (email) DO NOTHING;
      `,
    sql`
          INSERT INTO users (name, email, password)
          VALUES ('Guillermo Rauch', 'rauchg@vercel.com', '123456')
          ON CONFLICT (email) DO NOTHING;
      `,
    // sql`
    //       INSERT INTO users (name, email, image)
    //       VALUES ('Lee Robinson', 'lee@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg')
    //       ON CONFLICT (email) DO NOTHING;
    //   `,
    // sql`
    //       INSERT INTO users (name, email, image)
    //       VALUES ('Steven Tey', 'stey@vercel.com', 'https://images.ctfassets.net/e5382hct74si/4QEuVLNyZUg5X6X4cW4pVH/eb7cd219e21b29ae976277871cd5ca4b/profile.jpg')
    //       ON CONFLICT (email) DO NOTHING;
    //   `,
  ]);
  console.log(`[seed:seed] Seeded ${users.length} users`);

  return {
    createTable,
    users,
  };
}
