const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias:{
    ui: path.resolve(__dirname, '../src/ui'),
    api: path.resolve(__dirname, '../src/api'),
    assets: path.resolve(__dirname, '../src/assets'),
    features: path.resolve(__dirname, '../src/features'),},
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
    ],
  }
}
