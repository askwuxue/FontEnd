let gulp = require('gulp');

// 压缩css
let minifyCss = require('gulp-minify-css');

// 合并文件
let gulpConcat = require('gulp-concat');

// 压缩js
let gulpUglify = require('gulp-uglify');

// 按照序列化的方式处理任务
// 处理css的任务
gulp.task('css', function() {
    let stream = gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulpConcat('all.css'))
        .pipe(gulp.dest('build'));
    // cb();
    return stream;
})

// 处理js的任务
gulp.task('js', ['css'], function(cb) {
    let stream = gulp.src('js/*.js')
        .pipe(gulpUglify())
        .pipe(gulp.dest('build'));
    return stream;
})

gulp.task('default', ['css', 'js']);