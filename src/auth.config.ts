import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
// import router from 'next/router';
// import { useRouter } from 'next/navigation'

export const authConfig: NextAuthConfig = {
  debug: true,
  pages: {
    signIn: '/login',
    // signOut: '/auth/logout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const { pathname } = nextUrl;
      const user = auth?.user;
      const isLoggedIn = !!user;
      const isOnSecure = pathname.startsWith('/secure');
      // const session = await getSession(headers: Headers, config: NextAuthConfig)
      console.log('[auth.config:authorized]', user?.name, {
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
        return Response.redirect(new URL('/secure', nextUrl));
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
    // jwt: true, // OBSOLETE
    // strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    // Add providers with an empty array for now
    // CredentialsProvider({ /* ... */ }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
} satisfies NextAuthConfig;
