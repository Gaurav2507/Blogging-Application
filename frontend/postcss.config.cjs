// postcss.config.cjs
module.exports = {
  plugins: [
    require("@tailwindcss/postcss"), // or just 'tailwindcss'
    require("autoprefixer"),
  ],
};
