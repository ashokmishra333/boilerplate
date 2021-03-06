const { merge } = require("webpack-merge");
const baseConfigFile = require("./webpack.config.base");

module.exports = merge(baseConfigFile, {
  mode: "development",
  devServer: {
    port: 9000
  },
  devtool: "source-map"
});
