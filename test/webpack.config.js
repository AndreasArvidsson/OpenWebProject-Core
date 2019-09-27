const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "eslint-loader",
                        options: {
                            configFile: path.resolve(__dirname, "eslintrc.js")
                        }
                    }
                ]
            }
        ],
        noParse: [
            /benchmark/,
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "index.html")
        })
    ]
};

if (process.argv.indexOf("--perf") < 0) {
    module.exports.entry = path.resolve(__dirname, "test.js");
}
else {
    module.exports.entry = path.resolve(__dirname, "performance/perf.js");
}  