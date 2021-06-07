const path = require('path');

module.exports = {
    entry: {
        core: [
            './src/index.ts'
        ],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'index.js',
        library: ['Clickopolis', 'Core'],
        libraryTarget: 'umd',
        path: path.resolve(__dirname, './dist')
    }
}