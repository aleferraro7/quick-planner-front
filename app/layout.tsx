import type { Metadata } from 'next';
import { lusitana, montserrat, pt_sans } from '@/ui/fonts';
import styles from '../ui/home.module.css';

export const metadata: Metadata = {
  title: 'Quick Planner APP',
  description: 'Take notes fastly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${montserrat.className}`}
    >
      <body className={styles.body}>{children}</body>
    </html>
  );
}
