const gulp         = require("gulp"),
      stylus       = require("gulp-stylus"),
      urlVersion   = require("gulp-css-url-versioner"),
      pathFiles    = require("../config/docker-path.js");

gulp.task("default", function () {
  return gulp.src(pathFiles.input + "/*.styl")
    .pipe(stylus())
    .pipe(urlVersion({lastcommit: true}))
    .pipe(gulp.dest(pathFiles.output));
});
