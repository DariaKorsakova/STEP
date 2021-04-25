let gulp = require('gulp');
let browserSync = require('browser-sync').create();

gulp.task('hello', function() {
    console.log('Задача первая');
});

gulp.task('styles', function(){
    return gulp.src('css/*.css')
    .pipe(gulp.dest('production/css/')),
    console.log('Задача решена');
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});



