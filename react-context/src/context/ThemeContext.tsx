'use client';

import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
    theme: string,
    setTheme: (theme: string) => void
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({children} : {children: ReactNode}) => {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);

    if (ctx) {
        return ctx;
    } else {
        throw new Error('Error getting theme context')
    };
};