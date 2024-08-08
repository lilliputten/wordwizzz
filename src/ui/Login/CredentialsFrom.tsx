'use client';

import { useActionState } from 'react';
import classNames from 'classnames';

import { authenticate } from '@/lib/actions';

import { FormActions } from './FormActions';
import { ShowErrors } from './ShowErrors';

import { LoginAndPasswordForm } from './LoginAndPasswordForm';

export function CredentialsFrom() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  return (
    <form action={formAction} className={classNames('space-y-3')}>
      <LoginAndPasswordForm />
      <FormActions isPending={isPending} />
      <ShowErrors errorMessage={errorMessage} />
    </form>
  );
}
