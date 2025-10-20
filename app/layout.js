// app/layout.jsx  (root layout — server component)
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { AuthProvider } from '@/modules/auth/AuthProvider';
import { ToastProvider } from '@/components/Shared/ToastProvider';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${plusJakarta.className} ${plusJakarta.variable} antialiased`}>
      <body className='h-screen max-h-[100dvh] max-w-screen bg-[#0a0a0a]'>
        <AuthProvider>
          <ToastProvider>{children}</ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
