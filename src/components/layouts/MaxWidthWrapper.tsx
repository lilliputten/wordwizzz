import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from '@/core/types/generic';

type TProps = TPropsWithChildrenAndClassName;

export const MaxWidthWrapper: React.FC<TProps> = (props) => {
  const {
    // prettier-ignore
    className,
    children,
  } = props;
  return (
    <div
      className={classNames(
        // prettier-ignore
        className,
        'MaxWidthWrapper',
        'w-full',
        'flex',
        'flex-row',
      )}
    >
      <div
        className={classNames(
          // prettier-ignore
          'MaxWidthWrapper_Content',
          'mx-auto',
          'w-full',
          'max-w-screen-lg',
        )}
      >
        {children}
      </div>
    </div>
  );
};
