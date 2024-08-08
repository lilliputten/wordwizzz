import classNames from 'classnames';

import { signIn } from '@/auth';

import { SocialLoginButton, TSocialLoginProviderId } from './SocialLoginButton';
import { SocialLoginDivider } from './SocialLoginDivider';
import {
  // FacebookIcon,
  // GoogleIcon,
  // YandexIcon,
  GithubIcon,
} from './socialIcons';

export function SocialLoginForm() {
  const socialLoginCallback = async (formData: FormData) => {
    'use server';
    const provider = formData.get('provider') as TSocialLoginProviderId;
    await signIn(provider);
  };
  return (
    <div className={classNames('w-full')}>
      <SocialLoginDivider />
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
