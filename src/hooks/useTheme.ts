"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Get initial theme from localStorage or default to dark
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDark ? 'dark' : 'light';

    localStorage.setItem('theme', theme);
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      console.log('Toggling theme:', prev, '->', newValue);
      return newValue;
    });
  };

  return { isDark, toggleTheme };
}