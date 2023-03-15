const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');

// live server
gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// tasks
gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// watch
gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
});

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"))
})

gulp.task('images', function () {
    return gulp.src("src/assets/images/**/*")
        // .pipe(imagemin())    
        .pipe(gulp.dest("dist/assets/images"));
});

gulp.task('icons', function () {
    return gulp.src("src/assets/icons/**/*")
        .pipe(gulp.dest("dist/assets/icons"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"));
});

// combine
gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'images', 'icons', 'scripts'));