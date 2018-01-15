const CopyWebpackPlugin = require('copy-webpack-plugin');
const { baseConfig, COMMON_EXTERNALS } = require('../webpack-build-scripts');
const path = require('path');

module.exports = {
    ...baseConfig,

    entry: './src/index.tsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },

    plugins: [
        ...baseConfig.plugins,
        new CopyWebpackPlugin([
            { from: './src/index.html', to: '.' }
        ])
    ]

};