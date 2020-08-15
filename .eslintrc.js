module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},

	plugins: [
		"import",
		"@doodad-js/doodad",
	],

	extends: [
		'airbnb-base',
	].concat([
		'./rules/overrides.js',
		'./rules/custom.js',
		'./rules/temporary.js',
	].map(require.resolve)),

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'script',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
};