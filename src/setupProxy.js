const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api/list', {
    target: 'http://127.0.0.1:7001/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }));
  app.use(createProxyMiddleware('/api/cityjson', {
    target: 'http://pv.sohu.com/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }));
};