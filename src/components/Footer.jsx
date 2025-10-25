import Contact from "./ContactForm";


export default function Footer() {
  return (
    <div id="contact" className="bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4]">
      <Contact />
      <div className="flex flex-row w-[90vw]">
        <p className="text-sm text-center flex flex-col  p-6">Copyright © 2025 Leonie Falke</p>
        <a href="/imprint" className=" text-sm text-center hover:underline flex flex-col p-6" >Imprint</a>

        <a href="https://devpost.com/leonie-falke?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer" className=" text-sm text-center hover:underline flex flex-col p-6 ml-auto" >DevPost</a>
        <a href="https://github.com/leonie-falke" target="_blank" rel="noopener noreferrer" className=" text-sm text-center hover:underline flex flex-col p-6" >Github</a>
      </div>
    </div>
  );
}
