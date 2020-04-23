const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    plugins: [
        new webpack.ProvidePlugin({
            // 外部モジュールのjqueryをすべてのファイル上で
            // 変数$として使えるようにする
            $: 'jquery'
        }),
        new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin()
    ]
}