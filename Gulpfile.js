var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var paths = {
    css: 'assets/css',
    scss: 'assets/scss/*.scss',
    js: 'assets/js/*.js'
};

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}

gulp.task('sass-min', function () {
    return gulp.src(paths.scss,
            {style: 'compressed'}
        )
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest(paths.css))// write to css dir
        .pipe(rename({suffix: '.min'}))
});

gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass())
        .on('error', swallowError)
        .pipe(gulp.dest(paths.css))// write to css dir
});

gulp.task('browser-sync', function() {  
    browserSync.init([paths.css, paths.js], {
        server: {   
            baseDir: "./"
        }
    });
});
gulp.task('watch', ['sass', 'browser-sync'], function () {  
    gulp.watch([paths.scss], ['sass']);
    gulp.watch("*.html").on('change', reload);
    gulp.watch("assets/js/*.js").on('change', reload);
});

//===========================================================
//INSTALAR
//npm install -g gulp
//npm install gulp gulp-sass browser-sync -save-dev

//EXECUTAR
//TERMINAL: gulp watch