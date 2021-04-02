let gulp = require('gulp');
let minifyCss = require('gulp-minify-css');
let gulpConcat = require('gulp-concat');

gulp.task('default', async function() {
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulpConcat('all.css'))
        .pipe(gulp.dest('./css/build'));
    gulp.src('js/*.js')
        .pipe()
})