export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  backgroundImage: {
    'primary-gradient':
      'linear-gradient(135deg, oklch(0.55 0.21 263), oklch(0.72 0.13 210))',
  },
}
  },
}