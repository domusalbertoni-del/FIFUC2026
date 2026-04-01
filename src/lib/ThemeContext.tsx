import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeCtx {
  isLight: boolean;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx>({ isLight: true, toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(true);
  return (
    <Ctx.Provider value={{ isLight, toggle: () => setIsLight((v) => !v) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
