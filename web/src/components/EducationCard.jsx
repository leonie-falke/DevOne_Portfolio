"use client";
import React from "react";
import education from "../data/educationData";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-12 text-center">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-[#f2e9e1] dark:bg-[#393552] p-6 rounded-2xl shadow-md transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#56949f] dark:text-[#9ccfd8]">{edu.degree}</h3>
            <p className="text-sm mb-1 font-medium">{edu.school}</p>
            <p className="text-sm mb-4 text-[#b4637a] dark:text-[#eb6f92]">{edu.year}</p>
            <p className="text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
