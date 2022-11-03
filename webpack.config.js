const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    popup: "./src/popup-page/popup.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  //   devtool: "inline-source-map",
  //   devServer: {
  //     static: "./dist",
  //   },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       title: "Development",
  //     }),
  //   ],

  //   optimization: {
  //     runtimeChunk: "single",
  //   },
};
