'use client';

import {useTheme} from '@/context/ThemeContext';

const ThemeButton = () => {
    const {theme, setTheme} = useTheme();

    return (
        <>
            <button
                className={`px-4 py-2 rounded-md bg-red-500 hover:scale-105 cursor-pointer transition`}
                onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}>
                Toggle
            </button>
        </>
    );
};

export default ThemeButton;