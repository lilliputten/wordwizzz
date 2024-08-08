import classNames from 'classnames';
import { BasicButton } from '../BasicButton';

export type TSocialLoginProviderId = 'github' | 'google';

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
  return (
    <BasicButton
      // prettier-ignore
      id={'SocialLoginButton-' + provider}
      name="provider"
      value={provider}
    >
      <span className={classNames('w-5', 'fill-white')}>{icon}</span>
      {title}
    </BasicButton>
  );
};
