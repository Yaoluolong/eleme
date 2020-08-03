module.exports = {
  outputDir: 'dist',
  assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)

  devServer: {
    port: 8888 // 端口
  },
  lintOnSave: false // 取消 eslint 验证

  // css配置
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import '@/styles/colors';`
  //     }
  //   }
  // // }
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 若使用 less-loader@5，请移除 lessOptions 这一级，直接配置选项。
  //       lessOptions: {
  //         modifyVars: {
  //           // 直接覆盖变量
  //         }
  //       }
  //     }
  //   }
  // }
}
