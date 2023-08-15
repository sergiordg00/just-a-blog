import { Inter } from 'next/font/google';

import "@/assets/css/reset.css";
import "@/assets/css/globals.css";

const inter = Inter({ subsets: ['latin'] });

import clsx from 'clsx';

export const metadata = {
  title: 'Just a blog - Next.js',
  description: 'A blog built with Next.js to help me learn about CMSs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(
        "bg-gray-100",
        inter.className
      )}>
        {children}

        <div id="portal"></div>
      </body>
    </html>
  );
}
