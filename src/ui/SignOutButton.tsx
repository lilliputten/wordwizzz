'use client';

import React from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';

import { Button } from '@/ui/button';
import { TPropsWithClassName } from '@/core/types/generic';

export const SignOutButton: React.FC<TPropsWithClassName> = (props) => {
  const { className } = props;
  const [isLoggingOut, setLoggingOut] = React.useState(false);
  const session = useSession();
  const {
    // Session parameters...
    data: sessionData,
    status,
    // update,
  } = session;
  console.log('XXX', session.data);
  // Effect: Check session
  React.useEffect(() => {
    console.log('[SignOutButton] Effect: Check session: before', {
      session,
    });
    // NOTE: It causes infinity loop
    if (!session.data) {
      fetch('/api/auth/session?update')
        .then((res) => res.json())
        .then((data) => {
          console.log('[SignOutButton] Effect: Check session: done', {
            data,
          });
          debugger;
          return session.update(data);
        })
        .catch((error) => {
          console.error('[SignOutButton] Effect: Check session: error', {
            error,
          });
          debugger;
        });
    }
  }, [session]);
  // React.useLayoutEffect(() => {}, [isLoggingOut]);
  // Disable sign out button on click...
  const onButtonClick = React.useCallback(() => {
    console.log('[SignOutButton:onButtonClick]');
    // NOTE: Use a delay to allow process form submission (eg, in `SecurePage` form)
    requestAnimationFrame(() => {
      setLoggingOut(true);
    });
  }, []);
  const hasSession = status === 'authenticated' && !isLoggingOut;
  // DEBUG: Show session state...
  React.useEffect(() => {
    console.log('[SignOutButton] Session', status, sessionData?.user?.email, sessionData);
  }, [sessionData, status]);
  return (
    <>
      <Button
        // Sign out button
        className={className}
        disabled={!hasSession}
        onClick={onButtonClick}
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </Button>
      {/*
        <button
          className={classNames(
            'flex',
            'h-[48px] grow',
            'items-center',
            'justify-center',
            'gap-2',
            'rounded-md',
            'bg-gray-50',
            'p-3',
            'text-sm',
            'font-medium',
            'hover:bg-sky-100',
            'hover:text-blue-600',
            'md:flex-none',
            'md:justify-start',
            'md:p-2',
            'md:px-3',
            'text-gray-900',
          )}
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
        */}
    </>
  );
};
