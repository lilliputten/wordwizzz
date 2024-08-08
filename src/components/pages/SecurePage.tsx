/**
 * @changed 2024.08.08, 15:33
 */

import React from 'react';
import classNames from 'classnames';
import { auth } from '@/auth';

import { signOut } from '@/auth';
import { SignOutButton } from '@/ui/SignOutButton';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
// import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

// export const dynamic = 'force-dynamic';

export const SecurePage: React.FC = async () => {
  const session = await auth();
  console.log('[SecurePage] DEBUG', {
    session,
  });
  const signOutCallback = async () => {
    'use server';
    console.log('[SecurePage] Signing out (delay)');
    // DEBUG: Emulate delay...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('[SecurePage] Signing out');
    await signOut({
      // @see https://github.com/nextauthjs/next-auth/issues/4612#issuecomment-1138620953
      // callbackUrl: '/api/auth/logout',
    });
  };
  return (
    <main
      className={classNames(
        // styles.test,
        'flex',
        'min-h-screen',
        'flex-col',
        'items-center',
        'justify-between',
        'p-24',
      )}
    >
      <h1>Secure page</h1>
      {/*
      <NextHeaderAndFooter />
      <NextLogo />
      <NextRubrics />
      */}
      <form action={signOutCallback}>
        <SignOutButton session={session} />
      </form>
    </main>
  );
};
