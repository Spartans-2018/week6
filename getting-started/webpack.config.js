const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const babelPolyfill = require("babel-polyfill");

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'babel-polyfill',
        './src/js/start.js',
        './src/styles/app.css'
    ],
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
                test: /\.(png|jpg|gif)$/,
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
        HtmlWebpackPluginConfig
    ]
};
