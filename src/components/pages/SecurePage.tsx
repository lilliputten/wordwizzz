/**
 * @changed 2024.08.08, 15:33
 */

import React from 'react';
import classNames from 'classnames';

import { auth, signOut } from '@/auth';
import { GenericLayout } from '@/components/layouts/GenericLayout';
import { SignOutButton } from '@/ui/SignOutButton';

export const SecurePage: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  const name = user?.name;
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
    <GenericLayout
      // prettier-ignore
      mainOverflow="auto"
    >
      <main
        className={classNames(
          // styles.test,
          'flex',
          // 'min-h-screen',
          'flex-1',
          'flex-col',
          'items-center',
          'gap-6',
          'justify-center',
          // 'justify-between',
          // 'p-4',
        )}
      >
        <h1>Secure page</h1>
        <h2>
          {/* Show user name */}
          Welcome, <b>{name}</b>!
        </h2>
        {/*
        <NextHeaderAndFooter />
        <NextLogo />
        <NextRubrics />
        */}
        <form action={signOutCallback}>
          <SignOutButton session={session} />
        </form>
      </main>
    </GenericLayout>
  );
};
