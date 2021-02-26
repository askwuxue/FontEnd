// 引入gulp 模块
const gulp = require('gulp');
gulp.task('first', () => {
    gulp.src('./src/css/base.css')
        .pipe(gulp.dest('./dist/css'));
})