'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ mode: 'dark', toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setMode(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggle = () => setMode(m => (m === 'dark' ? 'light' : 'dark'));

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}
