'use strict'

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    rename = require('gulp-rename'),
    del = require('del');

var config = require('./webpack.config');

/**
 *  清理生产目录文件
 */
gulp.task('clean', function (cb) {
    del(['./dist/*.js', './dist/*.css', './dist/*.map']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});


/**
 *  执行webpack打包
 */
gulp.task('webpack', ['clean'], function (cb) {
    webpack(config, cb)
});

/**
 * webpack-dev-server
 */
gulp.task("webpack-dev-server", function (callback) {
    var config = require('./webpack.config');
    config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/dev-server");
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    // 这里配置：请求http://localhost:9090/api，
    var proxy = [{
        path: "/wx/api/*",
        target: "http://127.0.0.1:3400",
        host: "127.0.0.1"
    }];
    //启动服务
    var app = new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        proxy: proxy
    });
    app.listen(8090);
});

/**
 *  压缩css文件
 */
gulp.task('style', function () {
    gulp.src('./dist/style.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});

/**
 *  压缩js文件
 */
gulp.task('script', function () {
    gulp.src('./dist/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack'], function () {
    console.log("环境:" + process.env.NODE_ENV);
    gulp.start('style', 'script')
});
