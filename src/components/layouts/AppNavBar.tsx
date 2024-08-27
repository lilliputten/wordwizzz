'use client';

import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { Navbar, IconButton, Collapse } from '@/components/ui/shared';
import { NavBarMenu } from './NavBarMenu';
import { NavBarButtons } from './NavBarButtons';

const logoSize = 96;

export const AppNavBar: React.FC = () => {
  // @see https://www.material-tailwind.com/docs/react/navbar
  const [openNav, setOpenNav] = React.useState(false);

  /* // DEBUG
   * const theme = useTheme();
   * console.log('[AppHeader]', {
   *   theme,
   * });
   */

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar
      // color="blue"
      // variant="gradient"
      fullWidth
      shadow={false}
      blurred={false}
      className={classNames(
        '--AppNavBar--',
        'px-4',
        'bg-transparent',

        // 'sticky',
        // 'top-0',

        'z-10',
        'h-max',
        'rounded-none',
        'py-2',
        'lg:py-4',
      )}
    >
      <div
        className={classNames(
          // prettier-ignore
          'mx-auto',
          'flex',
          'items-center',
          'justify-between',
          'gap-2',
        )}
      >
        <Link href="/" className={classNames('hover:opacity-80', 'transition-opacity')}>
          <Image
            src="/static/images/logo/v1/tr.svg"
            width={logoSize}
            height={logoSize}
            alt="Logo"
          />
        </Link>
        <div className={classNames('hidden', 'lg:block')}>
          <NavBarMenu />
        </div>
        <div className={classNames('flex', 'items-center', 'gap-x-2')}>
          <NavBarButtons />
        </div>
        <IconButton
          variant="text"
          className={classNames(
            'ml-auto',
            'h-6',
            'w-6',
            'text-inherit',
            'hover:bg-transparent',
            'focus:bg-transparent',
            'active:bg-transparent',
            'lg:hidden',
          )}
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className={classNames('h-6', 'w-6')}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={classNames('h-6', 'w-6')}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className={classNames('container', 'mx-auto', 'mb-4')}>
          <NavBarMenu />
          <div className={classNames('flex', 'items-center', 'gap-x-4')}>
            <NavBarButtons collapsed />
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};
