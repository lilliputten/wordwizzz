/**
 * @changed 2024.08.04, 21:00
 */

import classNames from 'classnames';

import { GenericLayout } from '@/components/layouts/GenericLayout';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
// import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

export function RegularPage() {
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
          'flex-col',
          'flex-1',
          'items-center',
          'justify-center',
          // 'p-24',
        )}
      >
        <h1>Regular page</h1>
        {/*
        <NextHeaderAndFooter />
        <NextLogo />
        <NextRubrics />
        */}
      </main>
    </GenericLayout>
  );
}
