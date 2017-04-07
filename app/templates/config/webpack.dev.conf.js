var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var baseConfig = require('./webpack.base.conf');

module.exports = function (env) {
  return webpackMerge(baseConfig(env), {
    devtool: '#cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      port: 8080,
      inline: true,
      hot: true,
      open: true,
      overlay: {
        errors: true,
        warinings: false,
      },
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        postcss: [
          autoprefixer({
            browsers: ['last 3 versions'],
          }),
        ],
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  });
};
