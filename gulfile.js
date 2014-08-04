var browserify = require( 'browserify' );
var gulp = require( 'gulp' );
var source = require( 'vinyl-source-stream' );

gulp.task( 'browserify', function() {
  return browserify( './public/main.js')
    .bundle()
    .pipe( source( 'bundle.js' ) )
    .pipe( gulp.dest( './public/build/'))
});