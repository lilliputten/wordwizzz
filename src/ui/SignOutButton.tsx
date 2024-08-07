'use client';

import React from 'react';
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
// import { getServerSession } from "next-auth/next";

import { Button } from '@/ui/button';
import { TPropsWithClassName } from '@/core/types/generic';

type TSignOutButton = TPropsWithClassName;

interface TServerSideProps {
  test: number;
}

// export const getStaticProps: GetStaticProps<TServerSideProps> = async (_context) => {
// /*
//  * const session = await getServerSession(context.req, context.res, authOptions);
//  * if (!session) {
//  *   return {
//  *     redirect: {
//  *       destination: "/api/auth/signin",
//  *       permanent: false,
//  *     },
//  *   };
//  * }
//  */
//
//   console.log('[SignOutButton:getServerSideProps');
//   debugger;
//
//   return {
//     props: {
//       // user: session.user,
//       test: 77,
//     },
//   };
// };

// export const SignOutButton: React.FC<TSignOutButton [> & TServerSideProps <]> = (props) => {
export const SignOutButton: React.FC<
  TSignOutButton /* & InferGetStaticPropsType<typeof getStaticProps> */
> = (props) => {
  const { className /* , test */ } = props;
  const [isLoggingOut, setLoggingOut] = React.useState(false);
  const session = useSession();
  const {
    // Session parameters...
    data: sessionData,
    status,
    // update,
  } = session;
  console.log('[SignOutButton:SignOutButton] DEBUG', {
    'session.data': session.data,
    // test,
  });
  /* // Effect: Check session
   * React.useEffect(() => {
   *   console.log('[SignOutButton] Effect: Check session: before', {
   *     session,
   *   });
   *   // NOTE: It causes infinity loop
   *   if (!session.data) {
   *     fetch('/api/auth/session?update')
   *       .then((res) => res.json())
   *       .then((data) => {
   *         console.log('[SignOutButton] Effect: Check session: done', {
   *           data,
   *         });
   *         debugger;
   *         return session.update(data);
   *       })
   *       .catch((error) => {
   *         console.error('[SignOutButton] Effect: Check session: error', {
   *           error,
   *         });
   *         debugger;
   *       });
   *   }
   * }, [session]);
   */
  // React.useLayoutEffect(() => {}, [isLoggingOut]);
  // Disable sign out button on click...
  const onButtonClick = React.useCallback(() => {
    console.log('[SignOutButton:onButtonClick]');
    // NOTE: Use a delay to allow process form submission (eg, in `SecurePage` form)
    requestAnimationFrame(() => {
      setLoggingOut(true);
    });
    // Alternative sign-out, on the client-side
    signOut();
  }, []);
  const hasSession = // status === 'authenticated' && // NOTE: Don't use information from the session due to Issue #8)
    !isLoggingOut;
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
