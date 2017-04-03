var gulp = require('gulp');
var to5 = require('gulp-6to5');
 
gulp.task('default', function () {
    return gulp.src(['server/**/*.js', "!server/public/modules/**/*.js", "!server/**/*.css"])
        .pipe(to5())
        .pipe(gulp.dest('dist'));
});