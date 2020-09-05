const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: "examples/main.js",
      // 模板来源
      template: "examples/index.html",
      // 输出文件名
      filename: "index.html",
    },
  },
  css: {
    loaderOptions: {
      less: {},
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("packages", resolve("packages"));
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
};
