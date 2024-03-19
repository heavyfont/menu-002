// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
          '@vueuse/nuxt',
          '@nuxt/content',
          'nuxt-swiper',
          '@hypernym/nuxt-gsap',
          '@hypernym/nuxt-font',
          "nuxt-split-type",
          "@nuxt/image",
          '@nuxt/ui'
     ],
     pages: true,
     css: [
          '~/assets/styles/main.scss',
          '~/assets/css/fonts.css'
     ],
     image: {
          cloudinary: {
            baseURL: 'https://res.cloudinary.com/dnwakycvo/image/fetch/'
          }
        },
     gsap: {
          extraPlugins: {
            scrollTrigger: true,
            draggable: true,
            flip: true,
            observer:true,
          }
     },
     font: {
          autoImport: true,
     },
     
     build: {
          transpile: ['swiper']
     }
})