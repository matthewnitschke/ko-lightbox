var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    gulp.src('src/ko-lightbox.js')
        .pipe(gulp.dest('dist')) // put the non minified file into dist
        .pipe(rename('ko-lightbox.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    gulp.src('src/ko-lightbox.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);
