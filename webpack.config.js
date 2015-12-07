var webpack = require('webpack')
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var dev = true;
module.exports = {
    entry: {
        "main": [  "./src/js/main.js"],
        "app": "./src/js/App.js"
    },
    output: {
        path: dev ? 'src/__build' : path.resolve(__dirname + '/src/dist/'),
        publicPath: 'http://localhost:8080/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test:/\.js$/, loader:"babel", exclude: /(node_modules|bower_components)/,query: {presets: ['es2015', 'react']}},
            {test: /\.css$/, loader: "style!css"},
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
            {test: /\.(jpg|png)$/, loaders: [
                "url?name=images/[hash:7]-[name].[ext]&limit=8192"
            ]}
        ]
    },
    resolve: {
        extensions :['', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index',
            inject: 'body',
            chunks: ['main']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].css")
    ]
}