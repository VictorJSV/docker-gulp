const gulp        = require("gulp"),
      gzip        = require("gulp-gzip"),
      runSequence = require("run-sequence"),
      gulpIf      = require("gulp-if"),
      imagemin    = require("gulp-imagemin"),
      imageminPNG = require("imagemin-optipng"),
      imageminJPG = require("imagemin-jpegtran"),
      imageminSVG = require("imagemin-svgo"),
      pathFiles		= require("../config/docker-path.js"),
      functions   = require("../config/functions.js");

gulp.task("copy:img", function() {
  return gulp.src(pathFiles.input + "/img/*.*")
  .pipe(gulpIf(functions.isProduction, imagemin({
    verbose: true,
    plugins: [
      imageminPNG({optimizationLevel: 3}),
      imageminJPG({progressive: true}),
      imageminSVG()
    ]
  })))
  .pipe(gulpIf(functions.isGzip, gzip({ append: false  })))
  .pipe(gulp.dest(pathFiles.output + "/img"));
});

gulp.task("copy:fonts", function() {
  return gulp.src(pathFiles.input  + "/fonts/**/*.*")
  .pipe(gulpIf(functions.isGzip, gzip({ append: false  })))
  .pipe(gulp.dest(pathFiles.output + "/fonts"));
});

gulp.task("default", function (cb) {
  runSequence("copy:img", "copy:fonts", cb)
});
