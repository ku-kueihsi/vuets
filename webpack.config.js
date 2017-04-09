module.exports = {
  entry: './app.ts',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    filename: 'app.bundle.js',
    path: __dirname
  },
  resolve: {
    extensions: ['.js', '.ts', 'tsx'],
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader'
        }]
      }
    ]
  },
};