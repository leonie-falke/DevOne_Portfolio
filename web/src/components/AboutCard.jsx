

export default function AboutCard() {
  return (
      <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8"
    >
      <h2 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-4">About Me</h2>
      <p className="max-w-2xl text-center text-lg leading-relaxed">
        I'm a passionate web developer focused on building modern, elegant, and
        efficient web applications. I love creating experiences that connect
        design and technology — always in the cozy vibe of Rosé Pine ✨
      </p>
    </section>
  );
}