const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task(
    'default',
    gulp.series(
        [shell.task('dotnet pack -o ./Releases/')]
    )
);