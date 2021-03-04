const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
    const entry = env.perf
        ? path.resolve(__dirname, "performance/perf.js")
        : path.resolve(__dirname, "test.js");
    return {
        entry,
        resolve: {
            modules: [
                path.resolve(__dirname, "../node_modules"),
                path.resolve(__dirname, "../src"),
            ]
        },
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
};