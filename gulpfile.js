var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var browserify = require("browserify");

function bundle_js() {
  var bundler = browserify('./client/index.js', { debug: true }).transform(babelify);
  return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('built'));
}

gulp.task('bundle', function () {
  return bundle_js();
})


gulp.task('default', ['bundle'], function() {
    nodemon({
        script: './server.js',
        ext: 'js json',
        watch: ['server/*', 'client/*'],
        ignore: []
    }).on('restart', function(files) {
        bundle_js();
        gutil.log('Account restarted due to files: ', files);
    });
});
