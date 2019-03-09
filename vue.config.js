module.exports = {
  configureWebpack: config => {
    console.log('process.env：',process.env.NODE_ENV,process.env.MY_NAME)
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('正式环境')
    } else {
      console.log('开发环境')
      // 为开发环境修改配置...
    }
  }
}