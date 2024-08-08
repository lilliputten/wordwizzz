import classNames from 'classnames';

import { signIn } from '@/auth';

import { SocialLoginButton, TSocialLoginProviderId } from './SocialLoginButton';
import { SocialLoginDivider } from './SocialLoginDivider';
import {
  GoogleIcon,
  GithubIcon,
  YandexIcon,
  // FacebookIcon,
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
      <form
        action={socialLoginCallback}
        className={classNames(
          // prettier-ignore
          'flex',
          'flex-col',
          'gap-3',
        )}
      >
        {/* Social login buttons */}
        <SocialLoginButton provider="github" title="Github" icon={<GithubIcon />} />
        <SocialLoginButton provider="google" title="Google" icon={<GoogleIcon />} />
        <SocialLoginButton provider="yandex" title="Yandex" icon={<YandexIcon />} />
      </form>
    </div>
  );
}
