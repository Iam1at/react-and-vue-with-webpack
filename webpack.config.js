const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: {
      "bundle-vue-app": "./src/vue-app.js",
      "bundle-react-app": "./src/react-app.jsx",
    },
    output: {
      path: __dirname + "/public",
      filename: "src/[name].js",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.jsx$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
      })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.vue'],
        modules: [
            "node_modules"
        ],
        alias: {
            // vue.js のビルドを指定する
            vue: 'vue/dist/vue.min.js'
        }
    },
  }
]