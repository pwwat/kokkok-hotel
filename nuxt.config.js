const env = process.env.NODE_ENV || 'development'

export default {
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/index.js'
    }
  ],

  middleware: ['auth'],

  devtool: (env === 'development') ? 'inline-source-map' : false,
  env: {
    baseUrl: process.env.NUXT_URL || 'localhost'
  },
  server: {
    host: process.env.NUXT_HOST || 'localhost' // default: localhost
  },

  ssr: true, // Turn On Server-Side Rendering
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: '~/plugins/localStorage.js',
      mode: 'client'
    },
    {
      src: '@/plugins/axios.js',
      mode: 'client'
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt'
  ],

  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.SERVER_URL || 'http://localhost:3000/api',
    credentials: true,
    proxyHeaders: false
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    html: {
      minify: { collapseWhitespace: true }
    }
  }
}
