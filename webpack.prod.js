const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
    mode: 'production',
    output: {
        // filename: '[name].[contentHash].bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [

    ],
    module: {
        rules: [

        ]
    }
})
