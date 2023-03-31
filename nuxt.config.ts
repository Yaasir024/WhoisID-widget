// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/base.css", "@/assets/main.css"],
  modules: ["@vite-pwa/nuxt", "@pinia/nuxt"],
  pwa: {
    manifest: {
      name: "WhoisID",
      short_name: "WhoisID",
      description:
        "Trust and authenticate your customers with digital verification",
      icons: [
        {
          src: "logo/40x40.png",
          sizes: "40x40",
          type: "image/png",
        },
        {
          src: "logo/120x120.png",
          sizes: "120x120",
          type: "image/png",
        },
        {
          src: "logo/160x160.png",
          sizes: "160x160",
          type: "image/png",
        },
      ],
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
