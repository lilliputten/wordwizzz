/**
 * @changed 2024.08.04, 20:05
 */

import Link from 'next/link';
import classNames from 'classnames';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

import styles from './test.module.scss';

export function HomePage() {
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
      <NextLogo />
      <div>
        <ul className={styles.RootList}>
          <li>
            <Link href="/regular">Regular page</Link>
          </li>
          <li>
            <Link href="/secure">Secure page</Link>
          </li>
          <li>
            <Link href="/nextpage">Default NextJS info page</Link>
          </li>
        </ul>
      </div>
      {/*
      <NextHeaderAndFooter className={styles.headerAndFooter} />
      <NextLogo />
      <NextRubrics />
      */}
    </main>
  );
}
