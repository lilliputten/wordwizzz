// import Link from 'next/link';
// import Image from 'next/image';
import classNames from 'classnames';
// import { Popover, PopoverHandler, PopoverContent, Button } from '@material-tailwind/react';

import { TPropsWithClassName } from '@/core/types/generic';
// import { Button, Popover, PopoverContent, PopoverHandler } from '@/components/ui/shared';

import { MaxWidthWrapper } from './MaxWidthWrapper';
import { AppNavBar } from './AppNavBar';

type TProps = TPropsWithClassName;

export const AppHeader: React.FC<TProps> = (props) => {
  const { className } = props;
  return (
    <MaxWidthWrapper
      className={classNames(
        // prettier-ignore
        className,
        'AppHeader',
        'bg-primary',
      )}
    >
      <AppNavBar />
    </MaxWidthWrapper>
  );
};
