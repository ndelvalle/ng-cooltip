var gulp  = require('gulp');
var gutil = require('gulp-util');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var karma = require('karma').server;
var isTravis = process.env.TRAVIS || false;
var pathToKarmaConf = __dirname.replace('/gulp', '');

gulp.task('build-js', function() {
  return gulp.src('src/js/ng-cooltip.js')
    .pipe(sourcemaps.init())
    .pipe(concat('ng-cooltip.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-css', function() {
  return gulp.src('src/styles/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('test', function (done) {
  console.log('isTravis', isTravis);
  karma.start({
    configFile: pathToKarmaConf + '/karma.conf.js',
    singleRun: isTravis
  }, done);
});

gulp.task('production', ['build-js', 'build-css']);
gulp.task('default', ['production']);
