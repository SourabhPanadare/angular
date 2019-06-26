'use strict';

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------

const gulp = require('gulp');
const responsive = require('gulp-responsive');
const nodemon = require('gulp-nodemon');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

var siteOutput = 'public/dist';

// -----------------------------------------------------------------------------
// Image Responsive
// -----------------------------------------------------------------------------

gulp.task('imgresponsive', function () {
  return gulp.src('public/images/*.{png,jpg}')
    .pipe(responsive({
      'back*.jpg': {
        width: 700,
        quality: 50
      },
      // produce multiple images from one source
      '*background.jpg': [
        {
          width: 700
        },{
          width: 700 * 2,
          rename: '*background@2x.jpg'
        }
      ]
    }))
    .pipe(gulp.dest(siteOutput));
});


// -----------------------------------------------------------------------------
// node server
// -----------------------------------------------------------------------------

gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple time
		if (!started) {
			cb();
			started = true;
		}
	});
});


// -----------------------------------------------------------------------------
// Static server
// -----------------------------------------------------------------------------

gulp.task('browser-sync',gulp.series('nodemon'), function() {
  browserSync.init({
    server: {
      proxy: "http://localhost:6200",
      files: ["public/**/*.*"],
      baseDir: siteOutput
    }
  });
});


// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', gulp.parallel('imgresponsive','browser-sync'));
