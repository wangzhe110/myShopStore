/**
 * Created by zaq on 16/8/8.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'),//图片压缩
    pngcrush = require('imagemin-pngcrush'),
    // sass = require('gulp-ruby-sass'),//scss编译
    // sass = require('gulp-sass'),//scss编译
    autoprefixer = require('gulp-autoprefixer'),//css3代码自动补全插件
    minifycss = require('gulp-minify-css'),//css压缩
    jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify');//提示信息
    livereload = require('gulp-livereload');//自动刷新页面
// 检查js
gulp.task('lint', function() {
    return gulp.src(['src/js/*.js','src/js/controllers/*.js','src/js/services/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
        // .pipe(notify({ message: 'lint task ok' }));
});
// 压缩js
gulp.task('js', function() {
    return gulp.src(['src/js/*.js','src/js/controllers/*.js','src/js/services/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
        // .pipe(notify({ message: 'js task ok' }));
});
//编译并压缩scss
// gulp.task('scss', function() {
//     return gulp.src('src/scss/*.scss')
//         .pipe(sass({ style: 'expanded' }))
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(minifycss())
//         .pipe(gulp.dest('dist/css'))
//         .pipe(notify({ essage: 'Styles task complete' }));
// });
// 合并、压缩、重命名css
gulp.task('small_css', function() {
    return gulp.src('src/css/small_size/*.css')
        .pipe(concat('small_size.css'))
        .pipe(gulp.dest('dist/css/small_size'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/small_size'));
        // .pipe(notify({ message: 'css task ok' }));
});
gulp.task('middle_css', function() {
    return gulp.src('src/css/middle_size/*.css')
        .pipe(concat('middle_size.css'))
        .pipe(gulp.dest('dist/css/middle_size'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/middle_size'));
    // .pipe(notify({ message: 'css task ok' }));
});
gulp.task('max_size', function() {
    return gulp.src('src/css/max_size/*.css')
        .pipe(concat('max_size.css'))
        .pipe(gulp.dest('dist/css/max_size'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/max_size'));
    // .pipe(notify({ message: 'css task ok' }));
});
// 压缩图片
gulp.task('img', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest('./dist/images/'));
        // .pipe(notify({ message: 'img task ok' }));
});
// 压缩html
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
        // .pipe(notify({ message: 'html task ok' }));

});
//清除文件
// gulp.task('clean', function(cb) {
//     del(['dest/assets/css', 'dest/assets/js', 'dest/assets/img'], cb)
// });
gulp.task('default',function () {
    gulp.run('js','small_css','middle_css','max_size','img','html');
    // 监听html文件变化
    gulp.watch('src/*.html', function(){
        gulp.run('html');
    });
    // 监听scss
    // gulp.watch('src/scss/*.scss', function () {
    //     gulp.run('scss');
    // });
    // 监听css
    gulp.watch('src/css/**/*.css', ['small_css','middle_css','max_size']);
    //
    // 监听 .js
    gulp.watch(['src/js/*.js','src/js/controllers/*.js','src/js/services/*.js'], ['lint', 'js']);
    //
    // // 监听 image 文件
    // gulp.watch('imges/*', ['img']);
    livereload.listen();
    // Watch any files in dest/, reload on change
    gulp.watch(['dist/**']).on('change', livereload.changed);
});