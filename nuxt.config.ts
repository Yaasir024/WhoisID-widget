// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/base.css", "@/assets/main.css"],
  modules: ["@vite-pwa/nuxt", '@pinia/nuxt',],
  pwa: {
    manifest: {
      name: "WhoisID",
      short_name: "WhoisID",
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
