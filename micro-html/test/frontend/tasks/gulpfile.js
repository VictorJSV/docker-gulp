const gulp            = require("gulp"),
      pug             = require("gulp-pug"),
      pugNative       = require("pug"),
      pugInheritance  = require("pug-inheritance"),
      rename          = require("gulp-rename"),
      pathFiles 	    = require("../config/docker-path.js"),
      functions       = require("../config/functions.js");

gulp.task("html", function(){
  var pugCustom = functions.pugAdapter(pugNative);
  return gulp.src(pathFiles.input + "/**/*.pug", { base : pathFiles.input })
    .pipe(pugLint())
    .pipe(pug({ pretty: !functions.isProduction(), pug: pugCustom }))
    .pipe(rename({ extname: ".phtml" }))
    .pipe(gulp.dest(pathFiles.output));
});
