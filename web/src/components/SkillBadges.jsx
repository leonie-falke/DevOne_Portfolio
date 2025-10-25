"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { currentSkills, learningSkills } from "../data/skillsData";

export default function Skills() {
  const renderSkill = (skill) => (
    <div id="skills"
      key={skill.name}
      className="flex flex-col items-center justify-center gap-2 p-4 bg-[#f2e9e1] dark:bg-[#393552] rounded-xl shadow-md hover:scale-105 hover:rotate-1 hover:shadow-2xl transition transform duration-300"
    >
      <Icon icon={skill.icon} className="text-4xl bg-[#f2e9e1] dark:bg-[#393552]" />
      <span className="text-sm bg-[#f2e9e1] dark:bg-[#393552]">{skill.name}</span>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-12 text-center">
        Skills
      </h2>

      {/* Skills */}
      <h3 className="text-2xl font-semibold text-[#575279] dark:text-[#e0def4] mb-6 text-center">
        Current Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
        {currentSkills.map(renderSkill)}
      </div>

      {/* Soon Skills */}
      <h3 className="text-2xl font-semibold text-[#575279] dark:text-[#e0def4] mb-6 text-center">
        Learning / Exploring
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {learningSkills.map(renderSkill)}
      </div>
    </section>
  );
}
