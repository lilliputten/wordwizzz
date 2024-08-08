'use client';

import React from 'react';
import classNames from 'classnames';
import { BasicButton } from '../BasicButton';

export type TSocialLoginProviderId = 'github' | 'google' | 'yandex';

interface TProps {
  provider: TSocialLoginProviderId;
  title: string;
  icon: React.ReactNode;
}

export const SocialLoginButton = (props: TProps) => {
  const {
    // prettier-ignore
    provider,
    title,
    icon,
  } = props;
  const [isLogging, setLogging] = React.useState(false);
  const onButtonClick = React.useCallback(() => {
    console.log('[SocialLoginButton:onButtonClick]');
    requestAnimationFrame(() => {
      setLogging(true);
    });
  }, []);
  return (
    <BasicButton
      // prettier-ignore
      id={'SocialLoginButton-' + provider}
      name="provider"
      value={provider}
      disabled={isLogging}
      onClick={onButtonClick}
    >
      <span
        // prettier-ignore
        className={classNames(
          // prettier-ignore
          'w-5',
          'h-5',
          'fill-white',
          'flex',
          'justify-center',
          'items-center',
          '[&>svg]:h-5',
        )}
      >
        {icon}
      </span>
      {title}
    </BasicButton>
  );
};
