import classNames from 'classnames';

export type TSocialLoginProviderId = 'github' | 'facebook';

interface TProps {
  provider: TSocialLoginProviderId;
  title: string;
  icon: React.ReactNode; // JSX.Element;
}

export const SocialLoginButton = (props: TProps) => {
  const {
    // prettier-ignore
    provider,
    title,
    icon,
    // handleSocialLoginClick,
  } = props;
  return (
    <button
      id={'SocialLoginButton-' + provider}
      name="provider"
      value={provider}
      className={classNames(
        // prettier-ignore
        'mb-3',
        'flex',
        'w-full',
        'items-center',
        'justify-center',
        'rounded',
        'bg-primary',
        'px-7',
        'pb-2.5',
        'pt-3',
        'text-center',
        'text-sm',
        'font-medium',
        // 'uppercase',
        'leading-normal',
        'text-white',
        'shadow-primary-3',
        'transition',
        'duration-150',
        'ease-in-out',
        'hover:bg-primary-accent-300',
        'hover:shadow-primary-2',
        'focus:bg-primary-accent-300',
        'focus:shadow-primary-2',
        'focus:outline-none',
        'focus:ring-0',
        'active:bg-primary-600',
        'active:shadow-primary-2',
        'dark:shadow-black/30',
        'dark:hover:shadow-dark-strong',
        'dark:focus:shadow-dark-strong',
        'dark:active:shadow-dark-strong',
        'bg-gray-50',
        'dark:bg-slate-700',
      )}
      role="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
    >
      <span
        className={classNames(
          // prettier-ignore
          'me-2',
          'fill-white',
          '[&>svg]:mx-auto',
          '[&>svg]:h-3.5',
          '[&>svg]:w-3.5',
        )}
      >
        {icon}
      </span>
      {title}
    </button>
  );
};
