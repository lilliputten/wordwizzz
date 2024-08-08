import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import { z } from 'zod';
import bcrypt from 'bcrypt';

import { authConfig } from '@/auth.config';
import { getUser } from '@/lib/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    ...authConfig.providers,
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
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      // NOTE 2024.08.08, 19:43: Error after th sign-in procudure: This GitHub App must be configured with a callback URL
    }),
  ],
});
