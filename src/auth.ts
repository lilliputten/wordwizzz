import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';

import { getUser } from '@/lib/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // @see https://authjs.dev/getting-started/authentication/credentials
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) {
            console.warn('[auth:NextAuth:authorize] No user found');
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            console.log('[auth:NextAuth:authorize] Successful authorization for', email, {
              email,
              user,
            });
            return user;
          }
        }
        // eslint-disable-next-line no-console
        console.error('[auth:NextAuth:authorize] Invalid credentials');
        return null;
      },
    }),
  ],
});
