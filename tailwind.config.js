/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/@lemonsqueezy/wedges/dist/**/*.{js,ts,jsx,tsx}", // Добавляем путь для компонентов Wedges
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Это нужно для поддержки темной темы
  plugins: [
    require("@lemonsqueezy/wedges").wedgesTW(), // Подключаем Wedges как плагин
  ],
};
