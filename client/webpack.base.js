const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      '@application': path.resolve(__dirname, './src/application'),
      '@domain': path.resolve(__dirname, './src/domain'),
      '@infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '@ui': path.resolve(__dirname, './src/ui'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          options: {
            eslintPath: require.resolve('eslint'),
          },
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      }
    ]
  },
  plugins: [
    new Dotenv(new Dotenv({
      systemvars: true
    })),
  ]
};
