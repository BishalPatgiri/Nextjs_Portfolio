import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { Providers } from "./theme-provider";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishal Patgiri",
  description: "Portfolio build with NextJs, tailwindCss",
  icons: {
    icon: '/BrandLogoDark.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //
    <html lang="en">
      <body
        className={`text-[#0E1B18] bg-[#FCFCFC] dark:bg-[#0E1B18] ${inter.className} dark:text-white`}
      >
        <Providers>
          <Header />
          <div className="dark:bg-[#0E1B18]">{children}</div>
        </Providers>
      </body>
    </html>
    //
  );
}
