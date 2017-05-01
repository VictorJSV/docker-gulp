const gulp         = require("gulp"),
      gzip         = require("gulp-gzip"),
      gulpIf       = require("gulp-if"),
      stylus       = require("gulp-stylus"),
      urlVersion   = require("gulp-css-url-versioner"),
      rupture      = require("rupture"),
      postcss      = require("gulp-postcss"),
      csswring     = require("csswring"),
      autoprefixer = require("autoprefixer"),
      pathFiles    = require("../config/docker-path.js"),
      functions    = require("../config/functions.js");

gulp.task("default", function () {
  let processors = [ autoprefixer() ];
  if (functions.isProduction()) {
    processors.push(csswring)
  }
  return gulp.src(pathFiles.input + "/*.styl")
    .pipe(stylus({ use: [rupture()] }))
    .pipe(postcss(processors))
    .pipe(urlVersion({lastcommit: true}))
    .pipe(gulpIf(functions.isGzip, gzip({ append: false  })))
    .pipe(gulp.dest(pathFiles.output));
});
