const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

const purgecss = require('gulp-purgecss')

function Compile(){
    return src('style.scss')
    .pipe(sass())
    .pipe(purgecss({content: ['./*.html']}))
    .pipe(dest('css'))
}

function watcher(){
    watch(['style.scss','_variables.scss', 'index.html'], Compile)
}

exports.default = series(Compile,watcher)

