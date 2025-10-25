"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] px-8 py-16"
    >
      <h2 className="text-4xl font-bold text-[#eb6f92] mb-8 text-center">Contact Me</h2>
      <p className="mb-6 text-center max-w-xl">
        Feel free to reach out via the form below or check my GitHub profile.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded-xl bg-[#f2e9e1] dark:bg-[#393552] text-[#e0def4] border border-[#31748f] focus:outline-none focus:ring-2 focus:ring-[#eb6f92]"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded-xl bg-[#f2e9e1] dark:bg-[#393552] text-[#e0def4] border border-[#31748f] focus:outline-none focus:ring-2 focus:ring-[#eb6f92]"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded-xl bg-[#f2e9e1] dark:bg-[#393552] text-[#e0def4] border border-[#31748f] focus:outline-none focus:ring-2 focus:ring-[#eb6f92]"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-[#eb6f92] text-[#191724] px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 flex gap-6">
        <a
          href="https://github.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9ccfd8] text-[#191724] px-6 py-2 rounded-2xl font-medium hover:opacity-90 transition"
        >
          GitHub
        </a>
        <a
          href="mailto:youremail@example.com"
          className="bg-[#eb6f92] text-[#191724] px-6 py-2 rounded-2xl font-medium hover:opacity-90 transition"
        >
          Email
        </a>
      </div>
    </section>
  );
}
