"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}


const ThemeContextDefaultValues: ThemeContextType = {
    theme: '',
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType | undefined>(ThemeContextDefaultValues);

type Props = {
    children: ReactNode;
};

export const ThemeProvider=({ children }: Props)=>{
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

