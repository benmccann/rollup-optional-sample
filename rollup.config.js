/* eslint-env es6 */

const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const terser = require('rollup-plugin-terser').terser;

const input = 'src/main.js';

module.exports = [
	// UMD builds (excluding moment/luxon)
	// dist/main.min.js
	// dist/main.js
	{
		input: input,
		plugins: [
			resolve(),
			commonjs()
		],
		output: {
			name: 'main',
			file: 'dist/main.js',
			format: 'umd',
			globals: {
				moment: 'moment'
			}
		},
		external: [
			'moment'
		]
	},
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
			terser()
		],
		output: {
			name: 'main',
			file: 'dist/main.min.js',
			format: 'umd',
			indent: false,
			globals: {
				moment: 'moment'
			}
		},
		external: [
			'moment'
		]
	},

	// UMD builds (including moment/luxon)
	// dist/main.bundle.min.js
	// dist/main.bundle.js
	{
		input: input,
		plugins: [
			resolve(),
			commonjs()
		],
		output: {
			name: 'main',
			file: 'dist/main.bundle.js',
			format: 'umd'
		}
	},
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
			terser()
		],
		output: {
			name: 'main',
			file: 'dist/main.bundle.min.js',
			format: 'umd',
			indent: false
		}
	}
];
