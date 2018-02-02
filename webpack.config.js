const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        path.join(__dirname, "index.tsx")
        //path.join(__dirname, "src/style/style.less")
    ],
    output: {
        filename: "index.[hash].js",
        chunkFilename: "[id].[hash].js",
        path: path.join(__dirname, "dist/")
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", query: { compilerOptions: { noEmit: false } } }
            //{ test: /\.less$/, use: ["style-loader", "css-loader?-url", "less-loader"] }
        ]
    },
    plugins: [
        new HtmlPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: "index.html"
        })
    ]
};
