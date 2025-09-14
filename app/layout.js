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
      {/* Use full screen/viewport sizing here */}
      <body className='h-screen w-screen'>
        <SidebarProvider>
          {/* root container fills the screen */}
          <div className='h-full w-full flex gap-x-2 bg-[#0a0a0a] lg:p-2'>
            {/* Desktop sidebar wrapper (hidden below lg). make it full height */}
            <div className='hidden lg:flex h-full'>
              <Sidebar />
            </div>

            {/* Content column: allow it to grow and shrink; internal scrolling will happen in main */}
            <div className='flex-1 min-h-0 flex flex-col'>
              <main className='flex-1 min-h-0 overflow-auto rounded-[4px] bg-[#101010] border border-[#1a1a1a]'>
                {children}
              </main>
            </div>
          </div>

          {/* Mobile sidebar overlay */}
          <MobileSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
