const {src, dest} = require ('gulp');
const sass = require ('gulp-sass');

function compile() {
	return src('styles/*.sass')
	.pipe(sass())
	.pipe(dest('styles'));
}

exports.default = compile;