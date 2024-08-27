import React from 'react';

// NOTE: Theme context is client-only component!
import { ThemeProvider } from '@/components/ui/shared';
import { customTheme } from '@/core/constants/themes/customTheme';

type Props = React.PropsWithChildren;

export const ThemeWrapper: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ThemeProvider value={customTheme}>
      {/* Main content */}
      {children as React.ReactElement}
    </ThemeProvider>
  );
};
