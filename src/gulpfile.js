var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require("gulp-sourcemaps");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var buildPath = './../dist';

const CSSLibrary = [];

const JSLibs = [
    './node_modules/jquery/dist/jquery.min.js',
    'assets/js/**/*.js'
]

gulp.task('sass', function(){
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths:CSSLibrary}))
        .pipe(gulp.dest(buildPath));
});

gulp.task('js', function(){
    return gulp.src(JSLibs)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildPath));
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('assets/js/**/*.js', gulp.series('js'));
});