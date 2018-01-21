module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},

	plugins: [
		"import"
	],

	extends: [
		'airbnb-base',
	].concat([
		'./rules/overrides.js',
		'./rules/temporary.js',
	].map(require.resolve)),

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'cjs',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
};