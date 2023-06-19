const webpack = require('webpack')
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assertsDir: 'public',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },
}