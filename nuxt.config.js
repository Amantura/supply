// eslint-disable-next-line nuxt/no-cjs-in-config
require('./configs/env')

export default {
  server: {
    host: process.env.NUXT_SERVER_HOST,
    port: process.env.NUXT_SERVER_PORT
  },
  ssr: true,
  components: true,
  head: require('./configs/head'),
  css: [
    '@/assets/neris-webfont/style.css',
    '@/assets/css/app.css',
    '@/assets/css/fontawesome.css',
  ],
  plugins: [
    '@/plugins/utils.js',
    '@/plugins/lazyload.js',
    '@/plugins/mask.js',
    { src: '@/plugins/3d-carousel.js', ssr: false }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  modules: [
    '@nuxtjs/axios',
    ['nuxt-lazy-load', {
      images: true,
      polyfill: true,
    }]
  ],
  axios: require('./configs/axios'),
  googleFonts: require('./configs/google-fonts'),
  build: require('./configs/build'),
}
