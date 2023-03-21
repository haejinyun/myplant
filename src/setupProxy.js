const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://api.nongsaro.go.kr/service/garden/gardenList',
			pathRewrite: {
                '^/api': ''
            },
            changeOrigin: true
        })
    )
};