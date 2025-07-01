import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navigation/navbar";
import Toptabs from "@/components/navigation/toptabs";
import Sidebar from "@/components/containers/sidebar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
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
      <body className={`${poppins.className} antialiased`}>
        <main className="w-screen h-screen flex flex-col sm:flex-row justify-start sm:justify-between">
          {/* NAVIGATION */}
          <section className="flex flex-col">
            <Navbar />
            <Toptabs />
          </section>

          {/* MAIN PAGES */}
          <section className="p-5 flex">
            { children }
          </section>

          {/* SIDEBAR */}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}