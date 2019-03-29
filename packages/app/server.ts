const port = process.env.PORT || 5000;
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config'));
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
    app.use(middleware(compiler, {
    // webpack-dev-middleware options
    }));
} else {
    app.use('/', express.static('./dist'));
}

app.listen(port, () => console.log(`Running at port ${port}`))