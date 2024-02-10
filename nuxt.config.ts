// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    superSecret: "",
  },
  devtools: { enabled: true },
});
