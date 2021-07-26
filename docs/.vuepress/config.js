const themeConfig = require('./config/theme/')

module.exports = {
  title: '河海交通所-计算机视觉课题组',
  description: '老师：徐鹏',
  port: '80',
  base: '/hhutrans/',
  dest: 'docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart',
      ["@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['shizuku'],
        clean: true ,
        messages: {
          welcome: '我是cver欢迎你的关注 ',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        },
        width: 240,
        height: 352
      }],
      [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.5, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }],
  ]
}  