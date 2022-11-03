const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
  plugins: [
    new HtmlWebpackPlugin({
      // 在dist路徑 generate a popup.html
      filename: "popup.html",
      // 根據這個絕對路徑 生成
      template: "./src/popup-page/popup.html",
      title: "Development",
      // To include only certain chunks you can limit the chunks being used
      // chunks name 跟 entry popup是同樣的名稱
      chunks: ["popup"],
    }),
    // new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "source",
    //       to: "dest",
    //       globOptions: {
    //         dot: true,
    //         gitignore: true,
    //       },
    //     },
    //     { from: "other", to: "public" },
    //     {
    //       from: path.resolve(__dirname, "../public1111"), //当前工作路径是在dist文件夹内，搜易这里的from就是项目目录/public文件夹内。（dist和public是同级的）
    //       to: "./", //放到output文件夹下，也就是当前工作文件夹dist内
    //       globOptions: {
    //         dot: true,
    //         gitignore: true,
    //       },
    //     },
    //   ],
    // }),
  ],

  //   devtool: "inline-source-map",
  //   devServer: {
  //     static: "./dist",
  //   },

  //   optimization: {
  //     runtimeChunk: "single",
  //   },
};
