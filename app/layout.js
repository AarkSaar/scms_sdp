// app/layout.js
import './globals.css';
import { SidebarProvider } from '../hooks/useSidebar';
import Sidebar from '../components/sidebar/sidebar';
import MobileSidebar from '../components/sidebar/sidebarMobile';

import { Plus_Jakarta_Sans } from 'next/font/google';

// Load the weights you need. Add or remove numbers as desired.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // adjust to your needs
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    // add the generated className and keep the CSS variable available
    <html lang='en' className={`${plusJakarta.className} ${plusJakarta.variable} antialiased`}>
      <body className=''>
        <SidebarProvider>
          <div className='bg-[#0a0a0a] p-2 h-[100dvh] flex space-x-2'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
              <main className='h-[100dvh] rounded-[4px] bg-[#101010] border border-[#1a1a1a]'>
                {children}
              </main>
            </div>
          </div>

          <MobileSidebar />
        </SidebarProvider>
      </body>
    </html>
  );
}
