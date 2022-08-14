const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    clean: true,
    filename: "[contenthash:8].bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
