import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Auth App',
  description: 'Sample application to explore modern authorization approaches',
};

interface Props {
  session: never; // Session | null;
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = (props) => {
  const { children, session } = props;
  return (
    <html lang="en">
      <Script
        type="text/javascript"
        src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
      />
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* Main content */}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
