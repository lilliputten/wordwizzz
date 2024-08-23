import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
// import { ThemeProvider } from '@material-tailwind/react';
// import Script from 'next/script';
// import Head from 'next/head'

// NOTE: Theme context is client-only component!
import { ThemeProvider } from '@/components/ui/shared';

// import '@material-tailwind/html/styles/material-tailwind.css';

import './globals.scss';
import { ThemeWrapper } from '@/components/layouts/ThemeWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WordWizzz!',
  description: 'WordWizzz word learning NextJS application',
};

interface Props extends React.PropsWithChildren {
  session: never; // Session | null;
}

const RootLayout: React.FC<Props> = (props) => {
  const { children, session } = props;
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeWrapper>
            {/* Main content */}
            {children as React.ReactElement}
          </ThemeWrapper>
        </SessionProvider>
      </body>
      {/* NOTE: Experiments with low-level html tailwind approach
      <Script
        // prettier-ignore
        type="text/javascript"
        src="/_next/static/@material-tailwind/html/scripts/ripple.js"
      />
      <Script
        type="text/javascript"
        src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
      />
      */}
    </html>
  );
};

export default RootLayout;
