import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./themetoggle.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
