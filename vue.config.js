module.exports = {
  outputDir: 'dist',
  assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)

  devServer: {
    port: 8888 // 端口
  },
  lintOnSave: false, // 取消 eslint 验证

  // css配置
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/styles/colors';`
      }
    }
  }
}
