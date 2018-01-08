module.exports = {
    plugins: [
        require("autoprefixer"),
    ],
    autoprefixer: {
        browsers: [
            "> 1%",
            "last 2 versions",
            "Firefox ESR",
            "Opera 12.1",
        ],
    },
};