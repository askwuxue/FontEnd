// 使用common JS语法配置webpack
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanComment = require('./src/plugins/cleanComment');
const webpack = require('webpack');

module.exports = {
    // 打包入口
    entry: './src/index.js',
    // 输出路径
    output: {
        // TODO 固定名，不是驼峰
        filename: 'build.js',
        path: resolve(__dirname, 'build'),
        // publicPath: resolve(__dirname, 'build')
    },
    // 配置loader
    module: {
        rules: [
            {
                // TODO 加载css资源，每种资源都需要一个loader来处理
                test: /\.css$/,
                use: [
                    // 创建style标签，并且将css资源插入
                    'style-loader',
                    // 将css资源整合成字符串的形式
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        // 创建style标签，将样式放入
                        // 'style-loader',
                        // TODO 代替style-loader 生成单独的文件
                        loader: MiniCssExtractPlugin.loader,
                        // TODO 解决CSS中background背景图访问地址错误
                        options: {
                            publicPath: '../'
                        }
                    },
                    // 将css文件整合到js文件中
                    'css-loader',
                    // TODO 如果没有安装less，需要安装less和less-loader
                ]
            },
            {
                // TODO 注意正则表达式的写法，不要随便使用空格
                test: /\.(jpeg|png|jgp)$/,
                // TODO 对css中使用url引入的图片使用url-loader 进行处理 使用url-loader 必须下载file-loader
                loader: 'url-loader',
                options: {
                    // TODO 对图片的大小进行限制，如果超过小于限制，使用base编码，减小请求次数
                    // 注：base64编码，会导致图片体积稍微变大一点。
                    limit: 1 * 1024
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                // TODO html-loader使用的是commonJS规范，所以将esModule关掉
                // 否则的话，生成一个jpeg是一个module模块的导出
                options: {
                    esModule: false
                }
            },
            {
                test: /\.md$/,
                // loader: './src/loader/makedown-loader.js';
                use: [
                    'html-loader',
                    './src/loader/makedown-loader.js'
                ]
            }
        ]
    },
    plugins: [
        // TODO 使用插件对HTML进行生成,自动引入打包后的资源文件
        // TODO htmlWebpackPlugin 必须和webpack的版本一致
        new HtmlWebpackPlugin({
            // TODO 模板中也不需要引入，生成的模板中会自动引入
            template: './src/index.html',
            // TODO 设置了template属性，title属性不生效
            // title: 'html-webpack-plugin auto create html'
        }),
        // TODO 生成多页面
        new HtmlWebpackPlugin({
            filename: 'about.html',
            title: 'create multi page'
        }),
        // TODO 使用插件，生成单独的css文件。存在bug，没有生成所有的css
        new MiniCssExtractPlugin({
            filename: './css/bound.css',
        }),
        // 清空打包目录然后存放本次打包结果
        new CleanWebpackPlugin(),
        // copy文件
        // new CopyWebpackPlugin(
        //     {
        //         patterns: [
        //             // 1. 第一种
        //             { from: 'public', to: 'css' }
        //             // 2. 第二种
        //             // 'public'
        //         ]
        //     }),
        // 自定义插件，去除打包后的注释 /** */
        new CleanComment(),

        // 使用HRM 插件 默认只有.css 文件会使用热替换功能，JavaScript文件，图片文件等，需要单独处理热替换功能
        // 使用 module.hot.accept('./XXX.js', () => { xxxx })
        new webpack.HotModuleReplacementPlugin()
    ],

    // 设置source-map 实现打包前的source和打包后的source的映射，方便调试
    // source-map生成.map文件，在文件最后添加一行注释
    devtool: 'source-map',
    // 定位源代码文件的名称
    // devtool: 'eval', 

    // 设置模式
    mode: 'development',

    // 热更新启动命令 npx webpack serve
    devServer: {
        // 静态资源路径存放的位置,devServe会去找该文件
        contentBase: resolve(__dirname, 'dist'),
        // 开启压缩
        compress: true,
        // 浏览器启动的端口
        port: '8888',
        // 是否打开浏览器
        open: true,
        // 设置代理
        proxy: {
            // 所有包含/api 的本地url都会被重定向
            // localhost:8888/api/user => https://api.github.com/api/user
            '/api': {
                target: 'https://api.github.com',
                // 对代理之后的url进行重写
                pathRewrite: {
                    '^/api': ''
                },
                // 改变请求源
                changeOrigin: true
            }
        },
        // 开启热更新HMR。热更新开启后，页面只会刷新修改的内容，如JavaScript，css。页面不会刷新
        // hot: true
        // TODO hot 和 hotOnly的区别，hot到代码出错还是会自动刷新，导致无法捕捉错误。
        // hotOnly 出现错误，仍然使用HMR。不会刷新，可以捕捉错误
        hotOnly: true
    },
}