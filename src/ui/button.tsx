import React from 'react';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from '@/core/types/generic';

interface TButtonProps extends TPropsWithChildrenAndClassName {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: TButtonProps) {
  const { className, children, onClick } = props;
  return (
    <button
      className={classNames(
        className,
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
