import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header/page";
import { Providers } from "./providers";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgress from "../components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bishal Patgiri | Full Stack Developer Portfolio",
  description: "Professional portfolio showcasing Full Stack Development projects, skills, and expertise in modern web technologies. Built with Next.js 15.",
  icons: {
    icon: "/images/BrandLogoDark.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`text-[#0E1B18] bg-gradient-to-br from-[#FCFCFC] via-[#F5F5F5] to-[#FCFCFC] dark:from-[#0E1B18] dark:via-[#0A1412] dark:to-[#0E1B18] ${inter.className} dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Providers>
            <ScrollProgress />
            <Header />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
