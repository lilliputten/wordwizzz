// @see:
// - https://react.dev/reference/react/forwardRef
// - https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/

import React from 'react';
import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from '@/core/types/generic';

type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & TPropsWithChildrenAndClassName;

export const BasicButton = React.forwardRef<HTMLButtonElement, TButtonProps>(
  function Button(fwdProps, ref) {
    const { className, children, disabled, ...rest } = fwdProps;
    const composedClassName = classNames(
      className,
      // @see https://tailwindui.com/components/application-ui/elements/buttons
      'flex',
      'items-center',
      'gap-3',
      'bg-blue-500',
      'text-white',
      'font-bold',
      'py-2',
      'px-4',
      'rounded',
      'transition',
      !disabled && 'hover:bg-blue-700',
      disabled && 'opacity-50',
      // disabled && 'cursor-not-allowed',
    );
    return (
      <button
        ref={ref}
        // @see https://tailwindui.com/components/application-ui/elements/buttons
        {...rest}
        className={composedClassName}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  },
);
