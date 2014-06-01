var gulp = require('gulp'),
      sass = require('gulp-ruby-sass'),
      browserSync = require('browser-sync'),
      plumber = require('gulp-plumber'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish');


var paths = {
    stylesheets: ['sass/**/*.scss'],
    scripts: ['js/**/*.js']
};

gulp.task('develop', ['watch', 'browser-sync']);

gulp.task('styles', function () {
    'use strict';
    gulp.src('sass/app.scss')
        .pipe(plumber())
        .pipe(sass({
            //debugInfo: true,
            lineNumbers: true
            //trace: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    'use strict';
    gulp.watch(paths.stylesheets, ['styles']);
});

gulp.task('browser-sync', function() {
    'use strict';
    browserSync.init(['css/**/*.css', '*.html'], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('lint-scripts', function() {
    'use strict';
  //gulp.src('js/**/*.js')
    gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
