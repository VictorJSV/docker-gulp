const gulp            = require("gulp"),
      gzip            = require("gulp-gzip"),
      gulpIf          = require("gulp-if"),
      recursiveConcat = require("gulp-recursive-concat"),
      babel           = require("gulp-babel"),
      uglify          = require("gulp-uglify"),
      pathFiles       = require("../config/docker-path.js")
      functions       = require("../config/functions.js");

gulp.task("default", function (cb) {
  return gulp.src(pathFiles.input + "/**/*.js")
    .pipe(recursiveConcat({ extname: '.js' }))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulpIf(functions.isProduction, uglify({
      mangle  : true,
      compress: {
        drop_console: true
      }
    })))
    .pipe(gulpIf(functions.isGzip, gzip({ append: false  })))
    .pipe(gulp.dest(pathFiles.output));
});
