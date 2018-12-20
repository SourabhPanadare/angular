var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');/*-------------------Javascript File-----------------------*/
var cssnano = require('gulp-cssnano');/*-------------------CSS File-------------------------*/
var gulpIf = require('gulp-if');
var cache = require('gulp-cache');

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir:'app'
		},
	})
});

gulp.task('sass',function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream:true
	}))
});

/*--Any Changes in scss is automatically converted to js--*/ 

gulp.task('watch',gulp.parallel('browserSync', 'sass'),function(){ 
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
  gulp.watch('app/*.html',browserSync.reload);
  gulp.watch('app/js/**/*.js',browserSync.reload);
});

/*---------------------------------------------------------*/

gulp.task('useref', function(){
 
    return gulp.src('app/*.html')
    // Run useref only if it’s an HTML file
    .pipe(gulpIf('*.html', useref()))
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))

    .pipe(gulp.dest('dist'))       
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('css', function(){
  return gulp.src('app/css/**/*')
  .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
  return gulp.src('app/js/**/*')
  .pipe(gulp.dest('dist/js'))
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})

gulp.task('json', function() {
  return gulp.src('app/json/**/*')
  .pipe(gulp.dest('dist/json'))
})

