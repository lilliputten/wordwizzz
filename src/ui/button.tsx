import React from 'react';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from '@/core/types/generic';

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & TPropsWithChildrenAndClassName;

export function Button(props: TButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <button
      {...rest}
      className={classNames(
        className,
        'flex',
        'items-center',
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
      )}
    >
      {children}
    </button>
  );
}
