const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
require("babel-polyfill");


module.exports = {
    entry: {
        'index': ['babel-polyfill','./src/js/index.js'],
        'drum': ['babel-polyfill','./src/js/drum.js'],
        'clock': ['babel-polyfill','./src/js/clock.js'],
        'css': './src/styles/app.css'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|wav)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/drum.html',
            inject: true,
            chunks: ['drum', 'css'],
            filename: 'drum.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/clock.html',
            inject: true,
            chunks: ['clock', 'css'],
            filename: 'clock.html'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index', 'css'],
            filename: 'index.html'
        }),
    ]
};
