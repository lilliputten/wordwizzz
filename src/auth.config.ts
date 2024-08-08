import type { NextAuthConfig } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';

import { getUser } from '@/lib/db';

export const authConfig: NextAuthConfig = {
  debug: true,
  pages: {
    signIn: '/login',
    signOut: '/',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async authorized({ auth, request }) {
      const { nextUrl } = request;
      const { pathname } = nextUrl;
      const user = auth?.user;
      const name = user?.name;
      const isLoggedIn = !!user;
      const isOnSecure = pathname.startsWith('/secure');
      console.log('[auth.config:authorized]', name, {
        pathname,
        // user,
        auth,
        isLoggedIn,
        isOnSecure,
      });
      if (isOnSecure) {
        if (isLoggedIn) {
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // TODO: It's required to update session (from `auth) here -- ?
        const response = Response.redirect(new URL('/secure', nextUrl));
        // // NOTE: This call causes multiple import errors here
        // const session = await nextAuth(request as NextApiRequest, response);
        /* console.log('[auth.config:authorized] Redirecting', name, {
         *   request,
         *   response,
         *   // session,
         *   // nextAuth,
         * });
         */
        return response;
      }
      return true;
    },
    // session, see:
    // - [How to invalidate/delete sessions for CredentialsProvider · nextauthjs/next-auth · Discussion #4687](https://github.com/nextauthjs/next-auth/discussions/4687)
    async session({ session, token }) {
      console.log('[auth.config:session]', {
        session,
        token,
      });
      return Promise.resolve(session);
    },
  },
  session: {
    // strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [], // See providers configuration in `src/auth.ts`
} satisfies NextAuthConfig;
