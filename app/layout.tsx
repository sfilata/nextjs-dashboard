import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: 'Acme Testing Dashboard',
  title: {
    template: '%s | Acme Testing Dashboard',
    default: 'Acme Testing Dashboard',
  },
  description: 'The website is used to learn the nextjs',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
