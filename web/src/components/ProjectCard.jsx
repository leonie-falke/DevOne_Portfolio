"use client";
import React from "react";
import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-[#575279] dark:text-[#e0def4] mb-12 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#f2e9e1] dark:bg-[#393552] rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-sm bg-[#31748f] px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#56949f] dark:text-[#9ccfd8] hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
