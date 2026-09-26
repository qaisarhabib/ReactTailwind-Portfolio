import Footer from "./pages/Partials/Footer";
import Portfolio from "./pages/Portfolio";
import Header from "./pages/Partials/Header";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  useEffect(() => { document.documentElement.classList.toggle("dark", isDark); localStorage.setItem("portfolio-theme", isDark ? "dark" : "light"); }, [isDark]);
  return <main className="min-h-screen bg-[#f5f5f0] text-zinc-900 dark:bg-[#111110] dark:text-zinc-100"><Header isDark={isDark} onThemeToggle={() => setIsDark((theme) => !theme)} /><Portfolio /><Footer /></main>;
}
export default App;
