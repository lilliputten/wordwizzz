import classNames from 'classnames';

import { TPropsWithChildrenAndClassName } from '@/core/types/generic';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

interface TProps extends TPropsWithChildrenAndClassName {
  mainOverflow?: 'auto' | 'hidden';
  mainDirection?: 'column' | 'row';
  // mainJustfyContent?:
  //   | 'center'
  //   | 'start'
  //   | 'end'
  //   | 'flex-start'
  //   | 'flex-end'
  //   | 'left'
  //   | 'right'
  //   | 'normal'
  //   | 'space-between'
  //   | 'space-around'
  //   | 'space-evenly'
  //   | 'stretch'
  //   | 'safe center'
  //   | 'unsafe center'
  //   | 'inherit'
  //   | 'initial'
  //   | 'revert'
  //   | 'revert-layer'
  //   | 'unset';
}

export const GenericLayout: React.FC<TProps> = (props) => {
  const {
    // prettier-ignore
    className,
    children,
    mainOverflow = 'hidden',
    mainDirection = 'column',
    // mainJustfyContent = 'center',
  } = props;
  return (
    <div
      className={classNames(
        // prettier-ignore
        className,
        'GenericLayout',
        'flex',
        'flex-col',
        'h-screen',
      )}
    >
      <AppHeader
        // prettier-ignore
        className={classNames(
          'GenericLayout_Header',
        )}
      />
      <div
        // prettier-ignore
        className={classNames(
          'GenericLayout_Main',
          'flex',
          'flex-1',
        )}
        style={{
          overflow: mainOverflow,
          flexDirection: mainDirection,
          // justifyContent: mainJustfyContent,
        }}
      >
        {children}
      </div>
      <AppFooter
        // prettier-ignore
        className={classNames(
          'GenericLayout_Footer',
        )}
      />
    </div>
  );
};
