import React, { useState } from "react";
import blogPosts from "../data/blogPost";
import MarkdownPage from "../modules/MarkdownPage";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <main className="min-h-screen bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4]px-8 py-16 pl-4 pr-4">
      <h1 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-12 text-center">Blog</h1>

      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#f2e9e1] dark:bg-[#393552] text-[#575279] dark:text-[#e0def4] rounded-2xl p-6 shadow-md hover:scale-105 hover:shadow-2xl transition transform duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <h3 className="text-xl font-semibold text-[#56949f] dark:text-[#9ccfd8] mb-2">{post.title}</h3>
              <p className="text-sm mb-4">{post.excerpt}</p>
              <span className="text-[#b4637a] dark:text-[#eb6f92] hover:underline">Read More →</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-[#b4637a] dark:text-[#eb6f92] hover:underline"
          >
            ← Back to Blog
          </button>
          <MarkdownPage url={selectedPost.url} />
        </div>
      )}
    </main>
  );
}
