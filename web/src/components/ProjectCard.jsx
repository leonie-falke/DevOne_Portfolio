"use client";
import React, { useState } from "react";
import projects from "../data/projectsData";
import blogPosts from "../data/blogPost";
import MarkdownPage from "../modules/MarkdownPage";
import { motion } from "framer-motion";

export default function Projects() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-12 text-center">
        My Projects & Blog
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Projects Grid 2/3 */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                      className="text-sm bg-[#31748f] text-white px-2 py-1 rounded-md"
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
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block w-px bg-[#31748f] mx-4" />

        {/* Blog Sidebar / Viewer 1/3 */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          {!selectedPost ? (
            <>
              <h3 className="text-2xl font-bold text-[#b4637a] dark:text-[#eb6f92] mb-4">
                Latest Blog Posts
              </h3>
              <a
                href="/blog"
                className="mt-4 text-[#575279] dark:text-[#e0def4] hover:underline font-medium"
              >
                See All Posts →
              </a>

              {blogPosts.slice(0, 3).map((post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#f2e9e1] dark:bg-[#393552] p-4 rounded-xl shadow-md hover:scale-105 hover:shadow-2xl transition transform duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <h4 className="font-semibold text-[#56949f] dark:text-[#9ccfd8]">{post.title}</h4>
                  <p className="text-sm text-[#575279] dark:text-[#e0def4]">{post.excerpt}</p>
                </motion.div>
              ))}
            </>
          ) : (
            <div>
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-4 text-[#b4637a] dark:text-[#eb6f92] hover:underline"
              >
                ← Back to Blog
              </button>
              <MarkdownPage url={selectedPost.url} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
