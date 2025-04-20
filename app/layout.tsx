import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import './globals.css'

import { Bolt, CircleUser, House, Menu, Sparkles, TicketPlus } from "lucide-react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Casparverse Online",
  description: "The Casparverse Chronicles & Wikipedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
            <main className="h-screen overflow-hidden flex flex-col sm:flex-row bg-greenblue">
      {/* NAV BAR */}
      <section className="bg-greenblue p-10 pt-10 pb-10 flex flex-row justify-center items-center sm:flex-col sm:justify-between sm:items-center gap-7">
        <Menu size={32} color="#ffffff" className="hover:cursor-pointer hidden sm:block" />
        <div className="flex flex-row justify-center items-center sm:flex-col sm:justify-between sm:items-center gap-7">
          <House size={32} color="#ffffff" className="hover:cursor-pointer" />
          <CircleUser size={32} color="#ffffff" className="hover:cursor-pointer" />
          <TicketPlus size={32} color="#ffffff" className="hover:cursor-pointer" />
        </div>
        <Bolt size={32} color="#ffffff" className="hover:cursor-pointer" />
      </section>
      
      {/* WHITE SPACE */}
      <section className="flex-1 flex rounded-none sm:rounded-l-[40px] bg-white p-5">
        {/* MAIN CONTENT */}
        <div className="flex-1 sm:p-20">
          {children}
        </div>

        {/* SIDEBAR */}
        <div className="hidden md:block w-[400px] bg-lightgreenblue rounded-[40px] p-10">
          <div className="flex gap-3">
            <Sparkles size={32} />
            <h2 className="text-2xl font-bold">Sidebar.</h2>
          </div>
        </div> 
      </section>
    </main>
      </body>
    </html>
  );
}
