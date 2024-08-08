// 'use client';

import { useActionState } from 'react';
import classNames from 'classnames';

import { authenticate } from '@/lib/actions';
import { CredentialsFrom } from './CredentialsFrom';
import { FormActions } from './FormActions';
import { ShowErrors } from './ShowErrors';
import { SocialsLoginsForm } from './SocialsLoginsForm';

const Title = () => (
  <h1
    className={classNames(
      // prettier-ignore
      // lusitana.className,
      'mb-3',
      'text-2xl',
      'text-blue-400',
    )}
  >
    Please log in to continue
  </h1>
);

export function LoginForm() {
  // const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  return (
    <div
      className={classNames(
        // prettier-ignore
        'flex-1',
        'rounded-lg',
        'bg-gray-50',
        'dark:bg-slate-800',
        'px-6',
        'pb-4',
        'pt-8',
      )}
    >
      <Title />
      <CredentialsFrom />
      <SocialsLoginsForm />
    </div>
  );
}
