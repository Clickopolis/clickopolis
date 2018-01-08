const { baseConfig, COMMON_EXTERNALS } = require('@clickopolis/webpack-build-scripts');
const path = require('path');

module.exports = {
    ...baseConfig,
    entry: {
        core: [
            './src/index.ts'
        ],
    },

    externals: COMMON_EXTERNALS,

    output: {
        filename: '[name].bundle.js',
        library: ['Clickopolis', 'Core'],
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    }
}