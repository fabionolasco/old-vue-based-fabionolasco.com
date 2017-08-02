module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  router: {
    mode: 'history',
    base: '/',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    title: 'FabioNolasco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Fabio Nolasco is a Senior Front End Developer and Architect who loves using web techologies to solve real world problems, by creating Web Apps that are scalable, maintainable, fast, secure, and portable to other platforms like Mobile, Desktop and IOT.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: ['~styles/main.css', 'foundation-sites/dist/css/foundation.min.css'],
  /*
  ** Customize app manifest
  */
  manifest: {
    display: 'standalone',
    name: 'Fabio Nolasco',
    short_name: 'FabioNolasco',
    orientation: 'portrait-primary',
    theme_color: '#1ea8ae',
    lang: 'en-US',
    description: 'Fabio Nolasco is a Senior Front End Developer and Architect who loves using web techologies to solve real world problems, by creating Web Apps that are scalable, maintainable, fast, secure, and portable to other platforms like Mobile, Desktop and IOT.',
    icons: [
      {
        'src': '/logo-16.png',
        'sizes': '16x16',
        'type': 'image/png'
      },
      {
        'src': '/logo-32.png',
        'sizes': '32x32',
        'type': 'image/png'
      },
      {
        'src': '/logo-48.png',
        'sizes': '48x48',
        'type': 'image/png'
      },
      {
        'src': '/logo-98.png',
        'sizes': '98x98',
        'type': 'image/png'
      },
      {
        'src': '/logo-120.png',
        'sizes': '120x120',
        'type': 'image/png'
      },
      {
        'src': '/logo-128.png',
        'sizes': '128x128',
        'type': 'image/png'
      },
      {
        'src': '/logo-144.png',
        'sizes': '144x144',
        'type': 'image/png'
      },
      {
        'src': '/logo-152.png',
        'sizes': '152x152',
        'type': 'image/png'
      },
      {
        'src': '/logo-192.png',
        'sizes': '192x192',
        'type': 'image/png'
      },
      {
        'src': '/logo-256.png',
        'sizes': '256x256',
        'type': 'image/png'
      },
      {
        'src': '/logo-384.png',
        'sizes': '384x384',
        'type': 'image/png'
      },
      {
        'src': '/logo-512.png',
        'sizes': '512x512',
        'type': 'image/png'
      }
    ]
  },
  /*
  ** Modules
  */
  plugins: ['~plugins/firebase'],
  modules: [
    '@nuxtjs/pwa'
  ]
}
