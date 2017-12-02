module.exports = {
  entry: './app/entry.js',
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'sourfce-map'
};