/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss"), "react"],
    "printWidth": 80,
    "singleQuote": true,
    "trailingComma": "all",
    "semi": false
};

module.exports = config;
