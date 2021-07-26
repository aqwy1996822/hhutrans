module.exports = {
  //type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: '标签' // 默认 “标签”
    }
  },
  valineConfig: {
    appId: 'fBDPBl6rckEMkaEqqd5cRn3I-gzGzoHsz',// your appId
    appKey: 'JK56jgBjKYzDziXySplJctEl', // your appKey
  },
  noFoundPageByTencent: false,
  keyPage: {
    keys: ['kexueguan723'], // 1.3.0 版本后需要设置为密文
    absoluteEncryption: true,
  },
  mode: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'Leo',
}