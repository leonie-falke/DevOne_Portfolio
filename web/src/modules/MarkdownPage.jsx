import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkSlug from "remark-slug";
import '../style/mdstyle.css';

export default function MarkdownPage(props) {
    const [content, setContent] = useState("");

    useEffect(() => {
        (async () => {
            const resource = await fetch(props.url);
            const text = await resource.text();
            setContent(text);
        })();
    }, [props.file, props.url]);

    return content ? (
        <div lang="en" className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkSlug]}>
                {content}
            </ReactMarkdown>
        </div>
    ) : <div />
}