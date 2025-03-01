import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/header/page";
import { Providers } from "./providers";
import { ThemeProvider } from "./context/ThemeContext"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Bishal Patgiri",
  description: "Designend and Developed in NextJS",
  icons: {
    icon: "/images/BrandLogoDark.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`text-[#0E1B18] bg-[#FCFCFC] dark:bg-[#0E1B18] ${inter.className} dark:text-white`}
      >
        <ThemeProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </ThemeProvider>

      </body>
    </html>
  );
}
