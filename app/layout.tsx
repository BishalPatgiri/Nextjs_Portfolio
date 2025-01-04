import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { Providers } from "./theme-provider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishal Patgiri",
  description: "Portfolio build with NextJs, tailwindCss",
  icons: {
    icon: "/BrandLogoDark.jpg",
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
      <head>
        {/* Add Font Awesome CSS */}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`text-[#0E1B18] bg-[#FCFCFC] dark:bg-[#0E1B18] ${inter.className} dark:text-white`}
      >
        <ThemeProvider>
          <Providers>
            <Header />
            <div className="dark:bg-[#0E1B18]">{children}</div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
    //
  );
}
