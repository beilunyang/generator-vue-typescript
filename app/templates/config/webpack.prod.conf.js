var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var autoprefixer = require('autoprefixer');
var baseConfig = require('./webpack.base.conf');

module.exports = function (env) {
  return webpackMerge(baseConfig(env), {
    devtool: '#source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 3 versions'],
            }),
          ],
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: true,
        comments: false,
        sourceMap: true,
      }),
    ],
  });
};

