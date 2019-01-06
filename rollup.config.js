/* eslint-env es6 */

const resolve = require('rollup-plugin-node-resolve');

const input = 'src/main.js';

module.exports = [
	// UMD builds (excluding moment)
	// dist/main.js
	{
		input: input,
		plugins: [
			resolve(),
		],
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
		plugins: [
			resolve(),
		],
		output: {
			name: 'main',
			file: 'dist/main.bundle.js',
			format: 'umd'
		}
	}
];
