// const express = require('express');
// const app = express();

const port = process.env.PORT || 5000;

// app.use('/', express.static('./dist'));

// app.listen(port, () => console.log(`Running at port ${port}`));

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config'));
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  // webpack-dev-middleware options
}));

app.listen(port, () => console.log(`Running at port ${port}`))