import { resolve } from "path";

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, '/'),
  },

  css: ['~/assets/scss/main.scss'],

  postcss: {
    plugins: { 
      tailwindcss: {},
      autoprefixer: {},
    }
  },

  compatibilityDate: "2025-03-06",
});