import Link from 'next/link';
import classNames from 'classnames';

import { TPropsWithClassName } from '@/core/types/generic';

type TProps = TPropsWithClassName;

export const AppFooter: React.FC<TProps> = (props) => {
  const { className } = props;
  return (
    <div
      className={classNames(
        // prettier-ignore
        className,
        'AppFooter',
        'flex',
        'justify-between',
        'items-center',
        'gap-4',
        'p-4',
      )}
    >
      <div
        className={classNames(
          // prettier-ignore
          'AppFooter_Brand',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <Link href="/">Copyright</Link>
      </div>
      <div
        className={classNames(
          // prettier-ignore
          'AppFooter_Menu',
          'flex',
          'justify-center',
          'items-center',
        )}
      >
        <Link href="/">Bottom Menu</Link>
      </div>
    </div>
  );
};
