const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { baseConfig, COMMON_EXTERNALS } = require('@clickopolis/webpack-build-scripts');
const path = require('path');

module.exports = {
    ...baseConfig,

    entry: './src/index.tsx',

    resolve: {
        ...baseConfig.resolve,
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },

    devtool: 'source-map',

    plugins: [
        ...baseConfig.plugins,
        new CopyWebpackPlugin([
            { from: './src/index.html', to: '.' },
            { from: './src/images', to: './images' }
        ]),
        // new HtmlWebpackPlugin({
        //     title: 'Clickopolis'
        // }),
        // new ScriptExtHtmlWebpackPlugin({
        //     defaultAttribute: 'async'
        // })
    ]

};