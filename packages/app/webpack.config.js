const { baseConfig, COMMON_EXTERNALS } = require('../webpack-build-scripts');
const path = require('path');

module.exports = {
    ...baseConfig,

    entry: './src/index.tsx',

    externals: COMMON_EXTERNALS,

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    }

};