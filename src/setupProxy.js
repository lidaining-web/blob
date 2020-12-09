const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(createProxyMiddleware('/api/', {
    target: 'http://www.lidaining.com:7001',
    // target: 'http://localhost:7001',
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