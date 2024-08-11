import classNames from 'classnames';

import { GenericLayout } from '@/components/layouts/GenericLayout';
import { AcmeLogo } from '@/ui/AcmeLogo';
import { LoginForm } from '@/ui/Login';

export function LoginPage() {
  return (
    <GenericLayout
      // prettier-ignore
      mainOverflow="auto"
    >
      <main
        className={classNames(
          // prettier-ignore
          'flex',
          'flex-col',
          'flex-1',
          'items-center',
          'justify-center',
          // 'md:h-screen',
        )}
      >
        <div
          className={classNames(
            // prettier-ignore
            'relative',
            'mx-auto',
            'flex',
            'flex-col',
            'w-full',
            'max-w-[400px]',
            'space-y-2.5',
            'p-4',
            // 'md:-mt-32',
          )}
        >
          <div
            className={classNames(
              // prettier-ignore
              'flex',
              'h-20',
              'w-full',
              'items-end',
              'rounded-lg',
              'bg-blue-500',
              'p-3',
              'md:h-36',
            )}
          >
            <div
              className={classNames(
                // prettier-ignore
                'w-32',
                'text-white',
                'md:w-36',
              )}
            >
              <AcmeLogo />
            </div>
          </div>
          <LoginForm />
        </div>
      </main>
    </GenericLayout>
  );
}
