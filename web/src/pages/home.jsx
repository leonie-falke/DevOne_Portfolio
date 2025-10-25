import { useRef } from "react";
import Projects from "../components/ProjectCard";
import Skills from "../components/SkillBadges";
import AboutCard from "../components/AboutCard";
import Education from "../components/EducationCard";
import AnimatedSection from "../modules/MotionAnimation";


export default function HomePage() {

  return (
    <div className='bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] w-full scroll-smooth'>
      <AnimatedSection id="about"><AboutCard /></AnimatedSection>
      <AnimatedSection id="education"><Education /></AnimatedSection>
      <AnimatedSection id="skills"><Skills /></AnimatedSection>
      <AnimatedSection id="projects"><Projects /></AnimatedSection>
    </div>
  );
}