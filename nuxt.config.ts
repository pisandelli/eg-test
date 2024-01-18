import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      title: 'EadPisa - Cursos de Tecnologia'
    }
  },
  // Read more about Nuxt Layers
  // https://nuxt.com/docs/getting-started/layers
  extends: [
    // Layout compositions for Nuxt
    // https://github.com/pisandelli/nuxt-layout-compositions
    'nuxt-layout-compositions'
  ],
  components: {
    dirs: [
      { path: '~/components/Compositions/', pathPrefix: false },
      { path: '~/components/Widgets/', pathPrefix: false, prefix: 'W' },
      { path: '~/components', prefix: 'C' }
    ]
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    styles: fileURLToPath(new URL('./assets/styles', import.meta.url))
  },

  // Enabled Take Over Mode or installed the TypeScript Vue Plugin (Volar)
  // https://nuxt.com/docs/getting-started/installation#prerequisites
  typescript: {
    shim: false
  },
  css: ['@/assets/styles/reset.styl'],
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            fileURLToPath(
              new URL('./assets/styles/abstracts/*.styl', import.meta.url)
            ),
            fileURLToPath(
              new URL('./assets/styles/utilities/*.styl', import.meta.url)
            )
          ]
        }
      }
    },
    /**
     * @see https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html
     * */
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  modules: [['@nuxtjs/google-fonts', {
    // Add options for Google Fonts
    // https://google-fonts.nuxtjs.org/options
    families: {
      Lato: [300, 400, 700]
    }
  }], ['@nuxtjs/html-validator', {
    // Add custom options for HTML-Validator
    // https://html-validator.nuxtjs.org/#configuration-optional
    // https://html-validate.org/rules/index.html
    // usePrettier: true,
    logLevel: 'warning',
    options: {
      rules: {
        'no-dup-class': 'off', // Avoid error for classes using [ ] notation
        'no-deprecated-attr': 'off' // Avoid some attributes conflicts with compositions
      }
    }
  }], ['@nuxt/image-edge', {
    // add nuxt-image config here
    // https://v1.image.nuxtjs.org/configuration
    dir: 'assets/images'
  }], ['@vueuse/nuxt', {
    // No options, but see the section Caveats for further info
    // https://www.npmjs.com/package/@vueuse/nuxt}
  }], ['@nuxtjs/color-mode', {
    // Control the site color Mode
    // https://color-mode.nuxtjs.org/
  }], ['nuxt-purgecss', {
    // Add purgecss options
    // https://purgecss.com/guides/nuxt.html#options
  }], ['nuxt-icon', {
    // Add custom options for NuxtIcon
    // https://github.com/nuxt-modules/icon
  }], ['@morev/vue-transitions/nuxt', {
    // Add custom options for vueTransitions
    // https://github.com/MorevM/vue-transitions#usage-with-nuxt
  }], ['nuxt-viewport', {
    // Define custom viewports
    // https://github.com/mvrlin/nuxt-viewport#configuration
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,

      tablet: 768
    },

    cookieName: 'viewport',

    defaultBreakpoints: {
      desktop: 'desktop',
      mobile: 'mobile',
      tablet: 'tablet'
    },

    fallbackBreakpoint: 'desktop'
  }], ['@nuxt/content', {
    // Add static content
    // https://content.nuxtjs.org/guide/writing/content-directory
  }], ['@pinia/nuxt', {
    autoImports: [
      'defineStore',
      'acceptHMRUpdate'
    ]
  }], "@nuxt/image"],
  runtimeConfig: {
    public: {
      API_BASE: '/api'
    }
  }
})