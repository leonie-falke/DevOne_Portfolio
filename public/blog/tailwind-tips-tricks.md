# Tailwind CSS Tips & Tricks

Tailwind CSS makes styling fast and flexible. Here are some quick tips to level up your workflow.

---

## 1. Use JIT Mode
Only generate the classes you use for faster builds and smaller CSS.

```js
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'],
}
