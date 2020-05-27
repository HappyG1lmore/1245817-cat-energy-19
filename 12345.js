var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");





gulp.task("css", function () {
  return gulp.src("source/sass/sytle.scss")
  .pipe(plumber())


  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))


  .pipe(sourcemap.write("."))
  .pipe(gulp.dest("source/css"));
});
