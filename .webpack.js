const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { resolve } = require("path");

const resolver = path => resolve(__dirname, path);

console.log("......", resolver("source/app/components"));

const devServerClinet = "webpack-dev-server/client?http://localhost:8080";
const hotLoaderPatch = "react-hot-loader/patch";

module.exports = {
  context: resolver("source"),
  devtool: "eval-source-map",
  stats: "errors-only",
  watch: true,
  cache: true,

  entry: {
    app: [devServerClinet, hotLoaderPatch, "./app/index.js"],
    page: "./page/index.js",
    pop: "./pop/index.js"
  },

  output: {
    path: resolver("public"),
    filename: "[name]/js/index.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{ loader: "babel-loader", options: {} }]
      },
      {
        test: /\.(css|styl)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[local]--[name]"
              }
            },
            {
              loader: "stylus-loader",
              options: {
                import: resolver("source/shared/styles/global.styl")
              }
            }
          ]
        })
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: "json-loader"
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: ["node_modules"],
    extensions: [
      ".css",
      ".js",
      ".svg",
      ".woff",
      ".woff2",
      ".json",
      ".jsx",
      ".ttf",
      ".styl"
    ],
    alias: {
      "@app/assets": resolver("source/app/assets"),
      "@app/components": resolver("source/app/components"),
      "@app/constants": resolver("source/app/constants"),
      "@app/models": resolver("source/app/models"),
      "@app/services": resolver("source/app/services"),
      "@app/styles": resolver("source/app/styles"),
      "@app/utilities": resolver("source/app/utilities"),

      "@page/assets": resolver("source/page/assets"),
      "@page/components": resolver("source/page/components"),
      "@page/constants": resolver("source/page/constants"),
      "@page/models": resolver("source/page/models"),
      "@page/services": resolver("source/page/services"),
      "@page/styles": resolver("source/page/styles"),
      "@page/utilities": resolver("source/page/utilities"),

      "@pop/assets": resolver("source/pop/assets"),
      "@pop/components": resolver("source/pop/components"),
      "@pop/constants": resolver("source/pop/constants"),
      "@pop/models": resolver("source/pop/models"),
      "@pop/services": resolver("source/pop/services"),
      "@pop/styles": resolver("source/pop/styles"),
      "@pop/utilities": resolver("source/pop/utilities")
    }
  },

  devServer: {
    clientLogLevel: "none",
    compress: true,
    inline: true,
    contentBase: resolver("public/app"),
    historyApiFallback: true,
    hotOnly: true,
    hot: true,
    index: "index.html"
    // noInfo: true
  },

  plugins: [
    new ExtractTextPlugin({
      filename(getPath) {
        return getPath("[name]/css/styles.css");
      }
    }),

    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    })
  ]
};
