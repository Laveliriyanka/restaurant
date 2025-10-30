import React from "react";
import iconLight from "../api/assets/moderate.png";
import iconDark from "../api/assets/waning-moon.png";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`p-2 rounded-full transition border-2 
        ${theme === "dark" ? "border-white" : "border-black"}`}
    >
      <img
        src={theme === "dark" ? iconLight : iconDark}
        alt={theme === "dark" ? "Light mode" : "Dark mode"}
        className="w-6 h-6"
      />
    </button>
  );
}
