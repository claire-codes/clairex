var x = require("babel-core/register");
var gulp = require( "gulp" );
var webpack = require( "webpack-stream" );
var sourcemaps = require( "gulp-sourcemaps" );
var rename = require( "gulp-rename" );
var uglify = require( "gulp-uglify" );

gulp.task( "build", function() {
	return gulp.src( ["src/clairendex.js"] )
		.pipe( webpack( require( "./webpack.config.js" ) ) )
		.pipe( gulp.dest( "." ) )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( uglify( {
			preserveComments: "license",
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		} ) )
		.pipe( rename( "clairex.min.js" ) )
		.pipe( sourcemaps.write( "./" ) )
		.pipe( gulp.dest( "lib/" ) );
} );
