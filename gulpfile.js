/**
 * Created by IvanLamprea on 04/05/2016.
 */
var Promise = require('es6-promise').Promise;
var gulp = require('gulp');
var noprotocol = require('gulp-noprotocol');
var livereload = require('gulp-livereload');

gulp.task('css',function(){
    return gulp.src('sass/**/*.{scss,sass}')
        .pipe(noprotocol.css( {browsers: ['Last 2 versions', 'IE >= 9']}))
        .on('error',noprotocol.notify)
        .pipe(gulp.dest('css/'));
});

gulp.task('watch',['css'], function(){
    livereload.listen();
    gulp.watch(['sass/**/*.{scss,sass}'], ['css']);
    gulp.watch([
        'css/**/*.css',
        'js/**/*.js',
        'html/**/*.html',
        'index.html'
    ]).on('change',livereload.changed);
});

gulp.task('default',['watch']);