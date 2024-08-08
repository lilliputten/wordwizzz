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
      /* // UNUSED, SAMPLE: Profile method
       * profile(profile) {
       *   / * // Sample profile data:
       *    * organizations_url = 'https://api.github.com/users/lilliputten/orgs'
       *    * public_gists = 1
       *    * public_repos = 97
       *    * received_events_url = 'https://api.github.com/users/lilliputten/received_events'
       *    * repos_url = 'https://api.github.com/users/lilliputten/repos'
       *    * site_admin = false
       *    * starred_url = 'https://api.github.com/users/lilliputten/starred{/owner}{/repo}'
       *    * subscriptions_url = 'https://api.github.com/users/lilliputten/subscriptions'
       *    * twitter_username = null
       *    * type = 'User'
       *    * updated_at = '2024-07-26T07:11:49Z'
       *    * url = 'https://api.github.com/users/lilliputten'
       *    * /
       *   console.log('[auth:NextAuth:GitHubProvider]', {
       *     profile,
       *   });
       *   debugger;
       *   return {
       *     id: profile.id.toString(),
       *     name: profile.name || profile.login,
       *     gh_username: profile.login,
       *     email: profile.email,
       *     image: profile.avatar_url,
       *   };
       * },
       */
    }),
  ],
});
