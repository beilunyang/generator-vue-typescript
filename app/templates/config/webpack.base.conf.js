var path = require('path');
var webpack = require('webpack');

module.exports = function (env) {
  return {
    entry: './src/main.ts',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      sourceMapFilename: '[name].map',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'tslint-loader',
          enforce: 'pre',
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            esModule: true,
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
    ],
  };
};
