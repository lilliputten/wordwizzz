'use client';

import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import { useTheme, Typography, Navbar, Button, IconButton, Collapse } from '@/components/ui/shared';
import { NavBarMenu } from './NavBarMenu';
import Link from 'next/link';
import { NavBarButtons } from './NavBarButtons';

export const AppNavBar: React.FC = () => {
  // @see https://www.material-tailwind.com/docs/react/navbar
  const [openNav, setOpenNav] = React.useState(false);

  const theme = useTheme();
  console.log('[AppHeader]', {
    theme,
  });

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const logoSize = 96;

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
        // 'shadow-none',

        // 'sticky',
        // 'top-0',
        'z-10',
        'h-max',
        // 'max-w-full',
        'rounded-none',
        // 'px-4',
        'py-2',
        // 'lg:px-8',
        'lg:py-4',

        // 'mx-auto',
        // 'max-w-screen-xl',
        // // 'px-4',
        // 'py-2',
        // // 'lg:px-8',
        // 'lg:py-4',
      )}
    >
      <div
        className={classNames(
          // 'container',
          // 'w-full',
          'mx-auto',
          'flex',
          'items-center',
          'justify-between',
          'gap-2',
          // 'text-blue-gray-900',
        )}
      >
        <Link href="/">
          <Image
            className={classNames('hover:opacity-80', 'transition-opacity')}
            src="/static/images/logo/wz-logo-v1-tr.svg"
            width={logoSize}
            height={logoSize}
            alt="WordWizzz! logo"
          />
        </Link>
        {/*
        <Typography
          as="a"
          href="#"
          className={classNames('mr-4', 'cursor-pointer', 'py-1.5', 'font-medium', 'text-red')}
        >
          WordWizzz!
        </Typography>
        */}
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
