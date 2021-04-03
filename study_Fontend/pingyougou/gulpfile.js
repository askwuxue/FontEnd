let { series, parallel, src, dest, watch } = require('gulp');

// html压缩
let htmlmin = require('gulp-htmlmin');

// css压缩
let minify = require('gulp-minify-css');

// 合并文件
let concat = require('gulp-concat');

// js混淆
let uglify = require('gulp-uglify');

// rename
let rename = require('gulp-rename');

// 实时更新
let livereload = require('gulp-livereload');

livereload({ start: true })

// 处理html
function gulpHtml() {
    return src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('build'))
}

//处理css文件 task任务必须是异步任务 参加gulp 异步执行
function gulpCss() {
    return src('css/*.css')
        // 合并文件
        .pipe(concat('all.css'))
        // 输出压缩前文件
        // TODO 不能输出到css文件夹下，因为下一次实行的时候 源文件夹是css文件夹下，导致内容会重复
        .pipe(dest('dist'))
        // 压缩
        .pipe(minify())
        // rename
        .pipe(rename({ extname: '.min.css' }))
        // 输出压缩后改名后的文件
        .pipe(dest('build'))
        .pipe(livereload());
}

// 处理js文件
function gulpJs() {
    return src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('build'))
}

// 实时更新
function gulpLivereload() {
    livereload.listen();
}

// 文件监控
watch('index.html', series(gulpHtml));

// ignoreInitial调用watch之后立即执行 queue 默认为true采用队列保证当前的task不会并行，delay监视文件变化后经过间隔时间启动task
// TODO 热更新
// npm install http-server -g 使用http-server 开启服务 url访问
// 使用gulp-livereload watch监听文件变化
// chrome插件 livereload 安装 呈现实心圆
watch('css/*.css', { queue: true, delay: 100 }, series(gulpCss, gulpLivereload));

// 对js文件进行监控
// TODO 不太优雅，代码有冗余，最好可以同时监听css和js 当其中一个变化，执行对应的task
watch('js/*.js', series(gulpJs));


// 使用任务的方式必须使用exports导出的形式
// 先合并文件然后处理
exports.default = parallel(gulpHtml, gulpCss, gulpJs);