// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', 'nuxt-svgo'],
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Starbucks® Rewards',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon/favicon.svg' },
        { rel: 'apple-touch-icon', href: 'favicon/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: 'site.webmanifest' },
      ],
      meta: [
        { name: 'description', content: 'More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.' },
        { name: 'keywords', content: 'Starbucks coffee' },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_preamble.scss" as *;',
        },
      },
    },
  },
  svgo: {
    dts: true,
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
        },
      ],
    },
  },
});
