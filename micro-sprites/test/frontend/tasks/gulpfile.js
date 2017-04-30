var gulp        = require("gulp");
var spritesmith = require("gulp.spritesmith");
var dockerPath  = require("/usr/local/app/frontend/config/docker-path.js");

gulp.task("default", function(){
    var spriteSelf = gulp.src(dockerPath.input + "/*.gif")
            .pipe(spritesmith({
              algorithm: "binary-tree",
              imgName: "demo.png",
              cssName: "demo.styl",
              imgPath: "./demo.png"
            }));
    spriteSelf.img.pipe(gulp.dest(dockerPath.output + "/img"));
    spriteSelf.css.pipe(gulp.dest(dockerPath.output + "/stylus"));
    return spriteSelf;
});
