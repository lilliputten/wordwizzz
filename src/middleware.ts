import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

/* // NOTE: This alternative approach causes the same multiply import errors as in `auth.config.ts` when using this imported `auth`.
 * import { auth } from '@/auth';
 * export default auth;
 */

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
