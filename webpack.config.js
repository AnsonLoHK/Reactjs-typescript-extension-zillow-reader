const path = require("path");

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
  module: {
    rules: [{ test: /\.ts(x?)$/, exclude: /node_modules/, use: ["ts-loader"] }],
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
