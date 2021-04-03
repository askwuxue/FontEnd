let { series, parallel, src, dest } = require('gulp');

// css压缩插件
let minify = require('gulp-minify-css');

// 合并文件插件
let concat = require('gulp-concat');

// js混淆
let uglify = require('gulp-uglify');

// rename
let rename = require('gulp-rename');

//处理css文件 task任务必须是异步任务 参加gulp 异步执行
function gulpCss() {
    src('css/*.css')
        // 合并文件
        .pipe(concat('all.css'))
        // 输出压缩前文件
        .pipe(dest('css'))
        // 压缩
        .pipe(minify())
        // rename
        .pipe(rename({ extname: '.min.css' }))
        // 输出压缩后改名后的文件
        .pipe(dest('build'))
}

// 处理js文件
function gulpJs() {
    return src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('js'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('build'))
}

// 使用任务的方式必须使用exports导出的形式
// 先合并文件然后处理
exports.default = parallel(gulpCss, gulpJs);