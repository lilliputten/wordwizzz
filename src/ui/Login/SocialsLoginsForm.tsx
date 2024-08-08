import React from 'react';
import classNames from 'classnames';

import { SocialLoginButton, TSocialLoginId } from './SocialLoginButton';
import {
  // FacebookIcon,
  // GoogleIcon,
  // YandexIcon,
  GithubIcon,
} from './socialIcons';
import { signIn } from '@/auth';

const Divider = () => {
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
        or login using
      </p>
    </div>
  );
};

export function SocialsLoginsForm() {
  const socialLoginCallback = async (formData: FormData) => {
    'use server';
    const provider = formData.get('provider') as TSocialLoginId;
    console.log('[SocialsLoginsForm:socialLoginCallback] start', {
      formData,
      provider,
    });
    debugger;
    const result = await signIn(provider);
    console.log('[SocialsLoginsForm:socialLoginCallback] done', {
      result,
    });
    debugger;
    // TODO:
    // Check url: /api/auth/signin/github
    /*
     * try {
     * } catch (error) {
     *   // eslint-disable-next-line no-console
     *   console.error('[SocialsLoginsForm:socia] error', (error as Error)?.message, {
     *     error,
     *   });
     *   debugger; // eslint-disable-line no-debugger
     *   // Just re-throw an error
     *   throw error;
     * }
     */
  };
  return (
    <div className={classNames('w-full')}>
      {/* Divider */}
      <Divider />

      <form action={socialLoginCallback}>
        {/* Social login buttons */}
        <SocialLoginButton
          // Github
          provider="github"
          title="Github"
          icon={<GithubIcon />}
        />
      </form>
    </div>
  );
}
