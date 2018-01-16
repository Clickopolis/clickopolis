const { baseConfig, COMMON_EXTERNALS } = require('../webpack-build-scripts');
const path = require('path');

module.exports = {
    ...baseConfig,
    entry: {
        core: [
            './src/index.ts'
        ],
    },

    resolve: {
        ...baseConfig.resolve,
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },

    output: {
        filename: 'index.js',
        library: ['Clickopolis', 'Core'],
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    }
}