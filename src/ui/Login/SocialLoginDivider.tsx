import classNames from 'classnames';

export const SocialLoginDivider = () => {
  return (
    <div
      className={classNames(
        // prettier-ignore
        'my-4',
        'flex',
        'items-center',
        'before:mt-0.5',
        'before:flex-1',
        'before:border-t',
        'before:border-neutral-300',
        'after:mt-0.5',
        'after:flex-1',
        'after:border-t',
        'after:border-neutral-300',
        'dark:before:border-neutral-500',
        'dark:after:border-neutral-500',
      )}
    >
      <p
        className={classNames(
          // prettier-ignore
          'mx-4',
          'mb-0',
          'text-center',
          // 'font-semibold',
          'dark:text-neutral-400',
        )}
      >
        or sign-in using
      </p>
    </div>
  );
};
