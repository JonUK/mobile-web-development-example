let gulp = require('gulp');
let imageResize = require('gulp-image-resize');
let rename = require('gulp-rename');

gulp.task('default', function () {

    [100, 200, 400, 800, 1600].forEach((size) => {

        gulp.src('100_rwd/images/donald_trump.jpg')
            .pipe(imageResize({ width: size, height: size }))
            .pipe(rename((path) => path.basename += "_" + size))
            .pipe(gulp.dest('100_rwd/dist'));
    });
});

