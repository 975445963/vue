module.exports = {
  lintOnSave: true,
  pluginOptions: {
    lintStyleOnBuild: false
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/variables.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '/user-service': {
        target: 'https://portal-test.ylfin.com/user-service',
        ws: true,
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/user-service': ''
        }
      },
      '/pub-service': {
        target: 'https://portal-test.ylfin.com/pub-service',
        ws: true,
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/pub-service': ''
        }
      },
      '/loan-service': {
        changeOrigin: true,
        ws: true,
        secure: true,
        target: 'https://portal-test.ylfin.com/loan-service',
        pathRewrite: {
          '^/loan-service': ''
        }
      },
      '/cashier-service': {
        changeOrigin: true,
        ws: true,
        secure: true,
        target: 'https://portal-test.ylfin.com/cashier-service/',
        pathRewrite: {
          '^/cashier-service': ''
        }
      },
      '/mgmt-service': {
        changeOrigin: true,
        ws: true,
        secure: true,
        target: 'https://portal-test.ylfin.com/mgmt-service/',
        pathRewrite: {
          '^/mgmt-service': ''
        }
      },
      '/jinfu': {
        changeOrigin: true,
        ws: true,
        secure: true,
        target: 'http://loan-text.jinfin.com/jinfu/',
        pathRewrite: {
          '^/jinfu': ''
        }
      }
    }
  },
  assetsDir: 'static',
  publicPath: process.env.BASE_URL,
  productionSourceMap: false
}
