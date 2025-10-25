"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const texts = ["Web Developer", "App Builder", "Design Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
      if (subIndex === texts[index].length + 1 && forward) setForward(false);
      else if (subIndex === 0 && !forward) {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, forward ? 120 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, texts]);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#191724] text-[#e0def4]">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm <span className="text-[#eb6f92]">Leonie</span>
      </h1>
      <h2 className="text-2xl text-[#9ccfd8] font-medium">
        {texts[index].substring(0, subIndex)}
        <span className="animate-pulse">|</span>
      </h2>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => scrollTo("about")}
          className="bg-[#eb6f92] text-[#191724] px-6 py-2 rounded-2xl font-medium hover:opacity-90 transition"
        >
          About Me ↓
        </button>
      </div>
    </section>
  );
}
