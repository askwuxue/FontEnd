const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 代替clean-webpack-plugin 编译前先清除目录
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    // 配置别名，引入模块的格式等，参考官网
    resolve: {
        // webpack默认只支持js模块，不支持ts模块的引入，通过extensions配置可以引入模块的类型
        extensions: ['.js', '.json', '.ts']
    },
    // 配置webpack-dev-server，自动打开浏览器热更新。package.json中也进行配置
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        // 自动生成或者使用已有的html模板，将script自动引入
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    mode: 'development'
}