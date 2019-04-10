const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
require("babel-polyfill");

const projects = ['index', 'drum', 'clock', 'array', 'cssvars', 'flexpanels'];

const plugins = projects.map(project => {
    return new HtmlWebPackPlugin({
        template: `./src/${project}.html`,
        inject: true,
        chunks: [`${project}`, 'css'],
        filename: `${project}.html`
    });
});

module.exports = {
    entry: {
        'index': ['babel-polyfill','./src/js/index.js'],
        'drum': ['babel-polyfill','./src/js/drum.js'],
        'clock': ['babel-polyfill','./src/js/clock.js'],
        'array': ['babel-polyfill','./src/js/array.js'],
        'cssvars': ['babel-polyfill','./src/js/cssvars.js'],
        'flexpanels': ['babel-polyfill','./src/js/flexpanels.js'],
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
    plugins: plugins
};
