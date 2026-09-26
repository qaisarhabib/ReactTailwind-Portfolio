import HeroSection from "@/pages/Portfolio/_components/HeroSection";
import AboutSection from "@/pages/Portfolio/_components/AboutSection";
import ExperienceSection from "@/pages/Portfolio/_components/ExperienceSection";
import SkillsSection from "@/pages/Portfolio/_components/SkillsSection";
import ProjectSection from "@/pages/Portfolio/_components/ProjectSection";
import { calculateExperience } from "@/utils/utils";

const Portfolio = () => {
  const totalExperience = calculateExperience("2022-09-01");

  return (
    <section>
      <HeroSection totalExperience={totalExperience} />
      <AboutSection totalExperience={totalExperience} />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
    </section>
  );
};

export default Portfolio;
