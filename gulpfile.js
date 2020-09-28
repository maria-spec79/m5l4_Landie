const {src, dest} = require ('gulp');
const sass = require ('gulp-sass');

function compile() {
	return src('*.sass')
	.pipe(sass())
	.pipe(dest('./'));
}

exports.default = compile;