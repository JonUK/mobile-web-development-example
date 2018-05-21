let gulp = require('gulp');
let imageResize = require('gulp-image-resize');
let rename = require('gulp-rename');

gulp.task('default', function () {

    [600, 700, 800, 900, 1000, 1600].forEach((size) => {

        gulp.src('100_rwd/images/donald_trump.jpg')
            .pipe(imageResize({ width: size, height: size }))
            .pipe(rename((path) => path.basename += "_" + size))
            .pipe(gulp.dest('100_rwd/dist'));
    });
});

