import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Reservation from "./pages/Reservation";
import ThankYou from "./pages/ThankYou";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
    >
      <header
        className={`p-4 flex items-center justify-between transition-colors duration-700
          ${theme === "dark" ? "bg-[#01101D] text-white" : "bg-[#FDFDFD] text-black"}`}
      >
        <nav className="flex gap-8 justify-center flex-1 text-lg font-semibold">
          {["Home", "Menu", "News", "Reservation"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`relative transition-all duration-300
                hover:text-[#F4C73F]
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#F4C73F]
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100`}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="ml-6">
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>
      <main className="transition-colors duration-700">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/menu" element={<Menu theme={theme} />} />
          <Route path="/news" element={<News theme={theme} />} />
          <Route path="/news/:id" element={<NewsDetails theme={theme} />} />
          <Route path="/reservation" element={<Reservation theme={theme} />} />
          <Route path="/thank-you" element={<ThankYou theme={theme} />} />
        </Routes>
      </main>
      <footer
        className={`p-4 text-center text-sm transition-colors duration-700
          ${theme === "dark" ? "bg-[#01101D] text-white" : "bg-[#FDFDFD] text-black"}`}
      >
        © Ресторан — Все права защищены
      </footer>
    </div>
  );
}
