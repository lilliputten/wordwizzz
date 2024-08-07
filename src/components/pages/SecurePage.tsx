/**
 * @changed 2024.08.06, 22:11
 */

// import React from 'react';
import classNames from 'classnames';

import { signOut } from '@/auth';
import { SignOutButton } from '@/ui/SignOutButton';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
// import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

// export const dynamic = 'force-dynamic';

export function SecurePage() {
  // const [isLoggingOut, setLoggingOut] = React.useState(false);
  // const { data: session, status } = useSession();
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
        <SignOutButton />
        {/*
        <Suspense fallback={<>Button</>}>
          <Button>
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </Button>
        </Suspense>
        <button
          className={classNames(
            'flex',
            'h-[48px] grow',
            'items-center',
            'justify-center',
            'gap-2',
            'rounded-md',
            'bg-gray-50',
            'p-3',
            'text-sm',
            'font-medium',
            'hover:bg-sky-100',
            'hover:text-blue-600',
            'md:flex-none',
            'md:justify-start',
            'md:p-2',
            'md:px-3',
            'text-gray-900',
          )}
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
        */}
      </form>
    </main>
  );
}
