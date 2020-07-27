const { merge } = require("webpack-merge");
const baseConfigFile = require("./webpack.config.base");

module.exports = merge(baseConfigFile, {
  mode: "production"
});
