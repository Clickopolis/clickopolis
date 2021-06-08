const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

const scssLoaders = [
    {
        loader: require.resolve('css-loader'),
    },
    require.resolve('sass-loader'),
];

module.exports = {
    entry: './src/index.tsx',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ require.resolve('style-loader'), ...scssLoaders ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
                loader: require.resolve('file-loader'),
                options: {
                    name: './images/[name].[ext]'
                }
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },

    devtool: 'source-map',

    plugins: [
        new CopyWebpackPlugin({
          patterns: [
            { from: "./src/index.html", to: "./index.html" },
            { from: "./src/images", to: "./images" },
          ],
        }),
        new WebpackNotifierPlugin(),
      ],

};