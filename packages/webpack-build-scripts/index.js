const baseConfig = require('./webpack.config.base');

module.exports = {
    baseConfig,

    COMMON_EXTERNALS: {
        'classnames': 'classNames',
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}