// @ts-nocheck
/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./**/*.tsx", "./*.tsx"],
  // @ts-ignore
  presets: [require("@myrelayer/tailwind-config")],
};

module.exports = config;
