import { usePortfolioStore } from "@/store/portfolioStore";
import { scrollToSection } from "@/utils/utils";
import profile from "@/assets/images/profile-pic.png";
import type { Experience } from "@/types/Experience";
import SocialLinks from "@/styles/Icons/SocialLinks";

const HeroSection = ({ totalExperience }: { totalExperience: Experience }) => {
  const { setMobileMenuOpen } = usePortfolioStore();
  return <section id="home" className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
    <div className="absolute -right-32 top-8 size-96 rounded-full bg-lime-300/35 blur-3xl" />
    <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-end gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
      <div className="pb-2 lg:pb-12"><p className="eyebrow mb-7 flex items-center gap-2"><span className="nav-dot" /> Available for new opportunities</p><h1 className="max-w-4xl text-5xl font-extrabold leading-[.95] tracking-[-0.07em] text-zinc-950 dark:text-zinc-50 sm:text-7xl lg:text-[5.8rem]">I build digital products that <span className="inline-block italic text-zinc-500 dark:text-lime-300">feel</span> as good as they work.</h1><p className="mt-7 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">Full-stack developer focused on thoughtful React and Next.js experiences, scalable APIs, and practical AI workflows.</p><div className="mt-9 flex flex-wrap gap-3"><button onClick={() => scrollToSection("projects", setMobileMenuOpen)} className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-lime-300 dark:text-zinc-950 dark:hover:bg-lime-200 cursor-pointer">Explore selected work <span className="ml-2 text-lime-300 dark:text-zinc-950">↓</span></button><a href="/qaiser-resume.pdf" download className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-bold transition hover:border-zinc-950 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border-lime-300 cursor-pointer"><i className="fas fa-download mr-2 text-zinc-500 dark:text-lime-300" />Download résumé</a></div><SocialLinks className="mt-10" /></div>
      <div className="relative mx-auto w-full max-w-sm lg:mb-8 lg:max-w-none"><div className="relative aspect-[4/4.7] overflow-hidden rounded-t-[9rem] rounded-b-[2rem] bg-zinc-200 dark:bg-zinc-800"><img src={profile} alt="Qaiser Habib" className="size-full object-cover object-top grayscale contrast-110" /><div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent" /></div><div className="absolute -bottom-5 -left-3 max-w-[220px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl shadow-zinc-950/10 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-black/30"><p className="eyebrow mb-1">Since 2022</p><p className="text-sm font-extrabold tracking-tight">{totalExperience.years}+ years translating ideas into reliable software.</p></div></div>
    </div>
  </section>;
};
export default HeroSection;
