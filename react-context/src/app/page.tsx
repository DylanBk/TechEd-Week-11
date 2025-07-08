'use client';

import { useTheme } from "@/context/ThemeContext";

import ThemeButton from "@/components/ThemeButton";

export default function Home() {
  const {theme} = useTheme();

  return (
    <div className={`h-screen w-full fixed inset-0 ${theme}`}>
      <h1 className="mt-44 text-5xl text-center">Theme Toggler</h1>

      <div className="flex flex-col">
        {/* placeholder random stuff to show theme changing */}

        <div className="flex flex-col items-center">
          <p className="mt-4">This is some text that will change with the theme.</p>
          <p className="mt-2">Click the button below to toggle the theme.</p>

          <span className="mt-8">
            <ThemeButton />
          </span>
        </div>
      </div>
    </div>
  );
}
