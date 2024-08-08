'use client';

import React from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';
import { Session } from 'next-auth';
import classNames from 'classnames';

import { BasicButton } from '@/ui/BasicButton';
import { TPropsWithClassName } from '@/core/types/generic';

interface TSignOutButtonProps extends TPropsWithClassName {
  session?: Session | null;
}

export const SignOutButton: React.FC<TSignOutButtonProps> = (props) => {
  const { className, session: serverSession } = props;
  const [isLoggingOut, setLoggingOut] = React.useState(false);
  /* // NOTE: This (client) session is not updating after sign-in without full page refresh (see Issue #8)
   * const clientSessionState = useSession();
   * const {
   *   data: clientSession,
   *   status,
   *   // update,
   * } = clientSessionState;
   */
  // Disable sign out button on click...
  const onButtonClick = React.useCallback(() => {
    console.log('[SignOutButton:onButtonClick]');
    // NOTE: Use a delay to allow process form submission (eg, in `SecurePage` form)
    requestAnimationFrame(() => {
      setLoggingOut(true);
    });
    /* // Alternative sign-out, on the client-side (see other in server-side `SecurePage`)
     * signOut();
     */
  }, []);
  const hasSession = // status === 'authenticated' && // NOTE: Don't use from the client session due to Issue #8
    // Check server session
    !!serverSession &&
    !!serverSession.user &&
    // Check logging out status
    !isLoggingOut;
  // DEBUG: Show session state...
  React.useEffect(() => {
    console.log('[SignOutButton] Session', isLoggingOut, serverSession?.user?.email, serverSession);
  }, [serverSession, isLoggingOut]);
  return (
    <>
      <BasicButton
        // prettier-ignore
        className={classNames(className)}
        disabled={!hasSession}
        onClick={onButtonClick}
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </BasicButton>
    </>
  );
};
