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
      // @see https://tailwindui.com/components/application-ui/elements/buttons
      'flex',
      'items-center',
      'gap-2',
      'text-white',
      'py-2',
      'px-4',
      'rounded',
      'transition',
      'ease-in-out',
      'bg-blue-500',
      !disabled && 'hover:bg-blue-700',
      disabled && 'opacity-50',
      className,
    );
    return (
      <button
        ref={ref}
        data-component="BasicButton"
        role="button"
        // @see https://www.creative-tim.com/twcomponents/component/tailwind-css-button-ripple-effect-by-material-tailwind
        data-ripple-light="true"
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
