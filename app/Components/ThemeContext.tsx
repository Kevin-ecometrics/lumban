"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeColor = "morado" | "azul" | "verde";

interface ThemeContextType {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "lumban-theme";

function getInitialTheme(): ThemeColor {
  if (typeof window === "undefined") return "azul";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "morado" || saved === "azul" || saved === "verde") return saved;
  return "azul";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColor>("azul");

  useEffect(() => {
    setThemeState(getInitialTheme());
  }, []);

  const setTheme = (color: ThemeColor) => {
    setThemeState(color);
    localStorage.setItem(STORAGE_KEY, color);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
