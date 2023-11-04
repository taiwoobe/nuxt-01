// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },
  typescript: {
    shim: false
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Demo Store',
      meta: [
        { name: 'description', content: 'Nuxt Demo store using most of nuxt features.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})
