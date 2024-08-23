'use client';

import React from 'react';
import classNames from 'classnames';

import { Button } from '@/components/ui/shared';

interface TProps {
  collapsed?: boolean;
}

export const NavBarButtons: React.FC<TProps> = ({ collapsed }) => {
  const isFull = !collapsed;
  const buttonClasses = [
    isFull && 'hidden',
    isFull && 'lg:inline-block',
    'hover:opacity-80',
  ].filter(Boolean);
  return (
    <>
      <Button
        variant="text"
        className={classNames(buttonClasses, 'text-white')}
        fullWidth={collapsed}
      >
        <span>Log In</span>
      </Button>
      <Button
        variant="filled"
        color="orange"
        className={classNames(buttonClasses)}
        fullWidth={collapsed}
      >
        <span>Sign in</span>
      </Button>
    </>
  );
};
