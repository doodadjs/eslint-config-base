const me = require('./index.js');
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
	{
		ignores: [
			"**/*.mjs",
			'**/*.inc.js',
			'**/*.templ.js',
			'**/*.config.js',
		],
	},

	{
		/*plugins: [
			//"import"
			//"@doodad-js/doodad",
		],*/

		files: ["**/*.js"],

		rules: {
			...me.configs.recommended,
		},

		languageOptions: {
            ecmaVersion: 2017,
			globals: {...globals.node},
            sourceType: "commonjs",
        },
	},
]);