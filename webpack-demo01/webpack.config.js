// 使用common JS语法配置webpack
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 打包入口
    entry: './src/index.js',
    // 输出路径
    output: {
        // TODO 固定名，不是驼峰
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    // 配置loader
    module: {
        rules: [
            {
                // TODO 加载css资源，每种资源都需要一个loader来处理
                test: /\.css/,
                use: [
                    // 创建style标签，并且将css资源插入
                    'style-loader',
                    // 将css资源整合成字符串的形式
                    'css-loader'
                ]
            },
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    // TODO 如果没有安装less，需要安装less和less-loader
                ]
            }
        ]
    },
    plugins: [
        // TODO 使用插件对HTML进行生成,自动引入打包后的资源文件
        // TODO htmlWebpackPlugin 必须和webpack的版本一致
        new HtmlWebpackPlugin({
            // TODO 模板中也不需要引入，生成的模板中会自动引入
            template: './src/index.html'
        })
    ],
    // 设置模式
    mode: 'development'
}