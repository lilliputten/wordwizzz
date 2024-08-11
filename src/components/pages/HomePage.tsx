/**
 * @changed 2024.08.04, 20:05
 */

import Link from 'next/link';
import classNames from 'classnames';

// import { NextRubrics } from '@/components/nextPage/NextRubrics';
import { GenericLayout } from '@/components/layouts/GenericLayout';
import { NextLogo } from '@/components/nextPage/NextLogo';
// import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

import styles from './test.module.scss';

export function HomePage() {
  const testContent = Array.from(new Array(30)).map((_, n) => {
    const k = String(n);
    return <p key={k}>Item {n}</p>;
  });

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
          'p-16',
          'gap-12',
        )}
      >
        <NextLogo />
        <div>
          <ul className={styles.RootList}>
            <li>
              <Link href="/nextpage">Default NextJS info page</Link>
            </li>
            <li>
              <Link href="/regular">Regular page</Link>
            </li>
            <li>
              <Link href="/secure">Secure page</Link>
            </li>
            <li>
              <Link href="/login">Login page</Link>
            </li>
          </ul>
        </div>
        {/*
        <NextHeaderAndFooter className={styles.headerAndFooter} />
        <NextLogo />
        <NextRubrics />
        */}
        <div className="demContent flex flex-col items-center">
          <h3>Demo content:</h3>
          {testContent}
        </div>
      </main>
    </GenericLayout>
  );
}
