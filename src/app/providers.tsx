"use client"
import * as React from "react";
import { ThemeProvider,ThemeProviderProps } from "next-themes";


export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}