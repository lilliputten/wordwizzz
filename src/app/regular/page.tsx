/**
 * @changed 2024.08.04, 21:00
 */

import classNames from 'classnames';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
// import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

export default function Regular() {
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
      <h1>Regular page</h1>
      {/*
      <NextHeaderAndFooter />
      <NextLogo />
      <NextRubrics />
      */}
    </main>
  );
}
