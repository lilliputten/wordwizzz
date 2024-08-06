/**
 * @changed 2024.08.06, 15:42
 */

import { PowerIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import { signOut } from '@/auth';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
// import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

export function SecurePage() {
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
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
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
      </form>
    </main>
  );
}
