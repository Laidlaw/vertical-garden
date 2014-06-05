var gulp = require('gulp'),
      sass = require('gulp-ruby-sass'),
      fileinclude = require('gulp-file-include'),
      rename = require('gulp-rename'),
      notify = require('gulp-notify'),
      browserSync = require('browser-sync'),
      plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      jshint = require('gulp-jshint'),
      stylish = require('jshint-stylish'),
      path = require("path");

var paths = {
    partials: '.partials/',
    stylesheets: ['sass/**/*.scss'],
    scripts: ['js/**/*.js']
};

gulp.task('styles', function () {
    'use strict';
    gulp.src('sass/custom.scss')
        .pipe(plumber())
        .pipe(sass({
            //debugInfo: true,
            lineNumbers: true
            //trace: true
        }))
        .pipe(gulp.dest('css'));
});

// fileinclude: grab partials from templates and render out html files
// ==========================================
gulp.task('fileinclude', function() {
  return  gulp.src(path.join(paths.partials, '*.tpl.html'))
    .pipe(fileinclude())
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(gulp.dest('./'))
    // .pipe(livereload(server))
    .pipe(notify({ message: 'Includes: included' }));
});



// browser-sync:
// ==========================================
gulp.task('browser-sync', function() {
    'use strict';
    browserSync.init(['css/**/*.css', '*.html', "js/*.js"], {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function() {
    'use strict';
    gulp.watch(paths.stylesheets, ['styles']);
});


gulp.task('lint-scripts', function() {
    'use strict';
  //gulp.src('js/**/*.js')
    gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// browser-sync:
// ==========================================
gulp.task('default', ['fileinclude', 'watch', 'browser-sync']);

