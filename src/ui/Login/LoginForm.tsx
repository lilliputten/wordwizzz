import classNames from 'classnames';

import { CredentialsFrom } from './CredentialsFrom';
import { SocialLoginForm } from './SocialLoginForm';

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
      <SocialLoginForm />
    </div>
  );
}
