"use strict";

var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var util = require('gulp-util');

//compile sass files
gulp.task('styles', function(){
  gulp.src('client/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('server/public/assets/styles/'))
});

gulp.task('copy', function(){
  gulp.src(['client/views/*'])
    .pipe(gulp.dest('server/public/assets/views/'));
  gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular/angular.min.js.map',
  'node_modules/angular-route/angular-route.min.js', 'node_modules/angular-route/angular-route.min.js.map',
  'node_modules/@angular/router/angular1/angular_1_router.js'])
    .pipe(gulp.dest('server/public/vendors/'))
});


//js compiles coffeescript
gulp.task('js', function(){
  gulp.src(['client/scripts/**/*.coffee']).
    pipe(
      coffee({bare:true})
        .on('error', util.log)
    )
    // .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('server/public/assets/scripts/'))
})

gulp.task('default', ['styles', 'copy', 'js'])
