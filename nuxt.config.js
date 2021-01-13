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
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js',
        integrity: 'sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU',
        type: 'text/javascript',
        crossorigin: 'anonymous',
        body: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js',
        integrity: 'sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj',
        type: 'text/javascript',
        crossorigin: 'anonymous',
        body: true
      },
      {
        src: 'https://kit.fontawesome.com/bdadd664c8.js',
        crossorigin: 'anonymous',
        body: true
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
        integrity: 'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],
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
      src: '~/plugins/axios.js',
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
    '@nuxtjs/eslint-module'
  ],

  /* fontawesome: {
    component: 'fa',
    icons: {
      solid: true
    }
  }, */
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'vue-sweetalert2/nuxt'
  ],
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
      minify: {
        collapseWhitespace: true
      }
    }
  }
}
