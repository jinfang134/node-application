module.exports = {
  devServer: {
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  chainWebpack: (config) => {
    //*//
    // if (process.env.NODE_ENV === 'development') {
    //   config
    //     .plugin('webpack-bundle-analyzer')
    //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    // }
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
