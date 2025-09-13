// app/layout.js
import './globals.css';
import { SidebarProvider } from '../hooks/useSidebar';
import Sidebar from '../components/sidebar/sidebar';
import MobileSidebar from '../components/sidebar/sidebarMobile';

import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${plusJakarta.className} ${plusJakarta.variable} antialiased`}>
      <body>
        <SidebarProvider>
          <div className='bg-[#0a0a0a] lg:p-2 h-[100dvh] flex gap-x-2'>
            {/* Desktop sidebar: hidden below lg */}
            <div className='hidden lg:flex'>
              <Sidebar />
            </div>

            {/* Content area */}
            <div className='flex-1 flex flex-col'>
              <main className='h-[100dvh] rounded-[4px] bg-[#101010] border border-[#1a1a1a]'>
                {children}
              </main>
            </div>
          </div>

          {/* Mobile sidebar overlay: only relevant below lg */}
          <MobileSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
