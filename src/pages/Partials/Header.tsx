import { usePortfolioStore } from "@/store/portfolioStore";
import { scrollToSection } from "@/utils/utils";
const navItems = ["About", "Experience", "Projects", "Skills"];
interface HeaderProps { isDark: boolean; onThemeToggle: () => void; }
const Header = ({ isDark, onThemeToggle }: HeaderProps) => {
  const { mobileMenuOpen, setMobileMenuOpen } = usePortfolioStore();
  return <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f5f5f0]/90 backdrop-blur-lg dark:border-zinc-800 dark:bg-[#111110]/95">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
      <button onClick={() => scrollToSection("home", setMobileMenuOpen)} className="flex items-center gap-2 text-left cursor-pointer"><span className="grid size-9 place-items-center rounded-full bg-zinc-900 text-sm font-extrabold text-lime-300 dark:bg-lime-300 dark:text-zinc-950">QH</span><span className="hidden text-sm font-extrabold tracking-tight sm:block">Qaiser Habib</span></button>
      <div className="hidden items-center gap-7 md:flex">{navItems.map((item) => <button key={item} onClick={() => scrollToSection(item.toLowerCase(), setMobileMenuOpen)} className="text-xs font-bold text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-lime-300 cursor-pointer">{item}</button>)}</div>
      <div className="flex items-center gap-3"><button aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} title={isDark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={isDark} onClick={onThemeToggle} className="grid size-9 place-items-center rounded-full border border-zinc-300 bg-white text-sm transition hover:border-zinc-950 dark:border-zinc-700 dark:bg-zinc-800 dark:text-lime-300 dark:hover:border-lime-300 cursor-pointer"><i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`} /></button><button onClick={() => scrollToSection("contact", setMobileMenuOpen)} className="hidden rounded-full bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-zinc-700 dark:bg-lime-300 dark:text-zinc-950 dark:hover:bg-lime-200 sm:block cursor-pointer">Let&apos;s talk <span className="ml-1 text-lime-300 dark:text-zinc-950">↗</span></button><button aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="grid size-9 place-items-center rounded-full border border-zinc-300 dark:border-zinc-700 md:hidden cursor-pointer"><i className={`fas ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`} /></button></div>
    </nav>
    {mobileMenuOpen && <div className="border-t border-zinc-200 bg-[#f5f5f0] px-5 py-4 dark:border-zinc-800 dark:bg-[#111110] md:hidden">{[...navItems, "Contact"].map((item) => <button key={item} onClick={() => scrollToSection(item.toLowerCase(), setMobileMenuOpen)} className="block w-full border-b border-zinc-200 py-3 text-left text-sm font-bold dark:border-zinc-800 cursor-pointer">{item}</button>)}</div>}
  </header>;
};
export default Header;
