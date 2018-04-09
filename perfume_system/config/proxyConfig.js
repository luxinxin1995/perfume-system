module.exports = {
  proxyList: {
    '/apis': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/apis': '/'
      }
    }
  }
}
