const webpack = require('webpack')
module.exports = {
    publicPath: '/',
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery',
                'image.config.env':{
                    NODE_ENV: '"production"'
                }
            })
        ]
    },
}