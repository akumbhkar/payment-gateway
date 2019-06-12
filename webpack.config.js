module.exports = {
  entry: [
    './src/index.js',
    './src/styles/index.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules:
      [
        {
          test: /\*.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|bmp)$/,
          use: [{
            loader: 'file-loader',
            options: { emitFile: true }
          }]
        }
      ]
  }
};