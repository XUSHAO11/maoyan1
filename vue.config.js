const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {

      // '/api': {
      //   target: 'https://i.maoyan.com',
      // },
      '/xushao': {
        target: 'https://i.maoyan.com',
        pathRewrite: { '^/xushao': '' },
        changeOrigin:true
      }
    }
  }

})

