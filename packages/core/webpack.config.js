const path = require('path');

module.exports = {
    entry: {
        core: [
            './src/index.ts'
        ],
    },

    resolve: {
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