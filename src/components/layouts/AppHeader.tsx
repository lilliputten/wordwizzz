import Link from 'next/link';
import classNames from 'classnames';

import { MaxWidthWrapper } from './MaxWidthWrapper';
import { TPropsWithClassName } from '@/core/types/generic';

type TProps = TPropsWithClassName;

export const AppHeader: React.FC<TProps> = (props) => {
  const { className } = props;
  return (
    <MaxWidthWrapper
      className={classNames(
        // prettier-ignore
        className,
        'AppHeader',
        'border-b border-blue-900',
      )}
    >
      <div
        className={classNames(
          // prettier-ignore
          'AppHeader_Container',
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
            'AppHeader_Brand',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <Link href="/">Brand</Link>
        </div>
        <div
          className={classNames(
            // prettier-ignore
            'AppHeader_Menu',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <Link href="/">Top Menu</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
