/**
 * @changed 2024.08.04, 20:05
 */

import classNames from 'classnames';

import { GenericLayout } from '@/components/layouts/GenericLayout';
import { NextRubrics } from '@/components/nextPage/NextRubrics';
import { NextLogo } from '@/components/nextPage/NextLogo';
import { NextHeaderAndFooter } from '@/components/nextPage/NextHeaderAndFooter';

// import styles from './test.module.scss';

export function NextPage() {
  return (
    <GenericLayout
      // prettier-ignore
      mainOverflow="auto"
      mainJustfyContent="center"
    >
      <main
        className={classNames(
          // styles.test,
          'flex',
          // 'min-h-screen',
          'flex-col',
          'items-center',
          'justify-center',
          'gap-6',
          'p-6',
          // 'p-24',
        )}
      >
        {/* <NextHeaderAndFooter /> */}
        <NextLogo />
        <NextRubrics />
      </main>
    </GenericLayout>
  );
}
