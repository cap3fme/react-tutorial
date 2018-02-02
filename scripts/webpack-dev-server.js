const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("../webpack.config.js");

const port = 8080;
const compiler = webpack(config);
const proxyConfig = {};

const server = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    proxy: proxyConfig
});

server.listen(port);