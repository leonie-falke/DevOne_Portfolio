import MarkdownPage from "../modules/MarkdownPage";

export default function Imprint() {
  return (
    <div className="bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] h-full ml-8">
      <MarkdownPage file="/static/imprint.md" />
    </div>
  );
}