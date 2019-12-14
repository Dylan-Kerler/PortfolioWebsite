const path = require("path");

module.exports = {
    entry: ["webpack/hot/dev-server", "./js/main.js"],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['@babel/react', "@babel/env"]}}
        ]
    },

    devServer: {
        contentBase: __dirname,
        watchOptions: {
            ignored: "/node_modules/"
        },
        hot: true,
        inline: true,
        port: 3001
    },

    output: {
        publicPath: "/src/public/",
        filename: "client.min.js",
        path: path.join(__dirname,"/src/public/"),
    },
}