import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';

import classNames from 'classnames';

export function LoginAndPasswordForm({ isPending }: { isPending?: boolean }) {
  return (
    <div className={classNames('w-full')}>
      <div>
        <label
          className={classNames(
            // prettier-ignore
            'mb-3',
            'mt-5',
            'block',
            'text-xs',
            'font-medium',
            'text-gray-900',
            'dark:text-gray-300',
          )}
          htmlFor="email"
        >
          Email
        </label>
        <div className={classNames('relative')}>
          <input
            className={classNames(
              // prettier-ignore
              'peer',
              'block',
              'w-full',
              'rounded-md',
              'border',
              'border-gray-200',
              'py-[9px] pl-10',
              'text-sm',
              'outline-2',
              'placeholder:text-gray-500',
              'text-gray-900',
              isPending && 'opacity-50',
            )}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            disabled={isPending}
            required
          />
          <AtSymbolIcon
            className={classNames(
              // prettier-ignore
              'pointer-events-none',
              'absolute',
              'left-3',
              'top-1/2',
              'h-[18px] w-[18px] -translate-y-1/2',
              'text-gray-500',
              'peer-focus:text-gray-900',
            )}
          />
        </div>
      </div>
      <div className={classNames('mt-4')}>
        <label
          className={classNames(
            // prettier-ignore
            'mb-3',
            'mt-5',
            'block',
            'text-xs',
            'font-medium',
            'text-gray-900',
            'dark:text-gray-300',
          )}
          htmlFor="password"
        >
          Password
        </label>
        <div className={classNames('relative')}>
          <input
            className={classNames(
              // prettier-ignore
              'peer',
              'block',
              'w-full',
              'rounded-md',
              'border',
              'border-gray-200',
              'py-[9px] pl-10',
              'text-sm',
              'outline-2',
              'placeholder:text-gray-500',
              'text-gray-900',
              isPending && 'opacity-50',
            )}
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            disabled={isPending}
            required
            minLength={6}
          />
          <KeyIcon
            className={classNames(
              // prettier-ignore
              'pointer-events-none',
              'absolute',
              'left-3',
              'top-1/2',
              'h-[18px] w-[18px] -translate-y-1/2',
              'text-gray-500',
              'peer-focus:text-gray-900',
            )}
          />
        </div>
      </div>
    </div>
  );
}
