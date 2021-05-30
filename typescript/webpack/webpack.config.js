const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 代替clean-webpack-plugin 编译前先清除目录
        clean: true,
        // webpack默认打包使用的是箭头函数作为一个全局的自执行函数，关闭arrowFunction选项，使得webpack使用普通函数
        environment: {
            'arrowFunction': false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            // 'chrome': '58',
                                            'ie': '11'
                                        },

                                        // 制定corejs 的版本
                                        'corejs': '3',
                                        // 使用corejs 的方式usage表示按需加载
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ]
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