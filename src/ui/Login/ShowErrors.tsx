import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

export function ShowErrors({ errorMessage }: { errorMessage?: string }) {
  if (!errorMessage) {
    return null;
  }
  return (
    <div
      className={classNames(
        // prettier-ignore
        'flex',
        'h-8',
        'items-end',
        'space-x-1',
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      {errorMessage && (
        <>
          <ExclamationCircleIcon
            className={classNames(
              // prettier-ignore
              'h-5',
              'w-5',
              'text-red-500',
            )}
          />
          <p
            className={classNames(
              // prettier-ignore
              'text-sm',
              'text-red-500',
            )}
          >
            {errorMessage}
          </p>
        </>
      )}
    </div>
  );
}
