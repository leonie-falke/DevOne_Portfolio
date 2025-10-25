

export default function AboutCard() {
  return (
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8"
      >
        <h2 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-4 ml-10">About Me</h2>
        <p className="ml-10">
          I’m a passionate <b><i>web and application developer</i></b> with a focus on building modern, efficient, <br />
          and user-centered solutions. Most of my work revolves around <b><i>JavaScript, C#</i></b>, and their surrounding <br />
          frameworks — tools that let me turn ideas into interactive, meaningful experiences. <br />
          I’m a creative and curious problem solver who loves experimenting with new technologies and approaches. <br />
          For me, development is not just about writing code — it’s about creating something new, <br />
          solving real problems, and continuously learning along the way.
        </p>
    </section>
  );
}