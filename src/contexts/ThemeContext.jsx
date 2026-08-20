import React, { createContext, useContext, useState } from 'react';
export const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return <ThemeContext.Provider value={{ isDark, toggleTheme: () => setIsDark(d => !d) }}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);
export default useTheme;
