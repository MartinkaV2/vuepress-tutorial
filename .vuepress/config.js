// docs/.vuepress/config.js
module.exports = {
  title: 'Dokumentációm',
  description: 'VuePress dokumentáció példa',
  base: '/vuepress-tutorial/',

  themeConfig: {
    nav: [
      { text: 'Kezdőlap', link: '/' },
      { text: 'Útmutató', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: {
      '/guide/': [
        '',
        'getting-started',
        'configuration',
        'markdown'
      ]
    }
  }
}