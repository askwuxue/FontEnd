const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

// TODO webpack-merge 用于合并并替换某些对象属性。JavaScript原生方法assign()使用不便
module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
            {
                patterns: [
                    // 1. 第一种
                    { from: 'public', to: 'css' }
                    // 2. 第二种
                    // 'public'
                ]
            })
    ]
})