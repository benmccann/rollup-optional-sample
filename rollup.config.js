/* eslint-env es6 */

const input = 'src/main.js';

module.exports = [
	// UMD builds (excluding moment)
	// dist/main.js
	{
		input: input,
		output: {
			name: 'main',
			file: 'dist/main.js',
			format: 'umd',
			globals: {
				luxon: 'luxon'
			}
		},
		external: [
			'luxon'
		]
	},

	// UMD builds (including moment)
	// dist/main.bundle.js
	{
		input: input,
		output: {
			name: 'main',
			file: 'dist/main.bundle.js',
			format: 'umd'
		}
	}
];
