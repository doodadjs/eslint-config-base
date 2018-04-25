module.exports = {
  rules: {
		"func-names": 'off',

		// Maybe change to "never" later...
		"function-paren-newline": 'off',

		// Can't use the existing rule because of "//! ..." and "/*! ... */" directives.
		//"indent": ["error", "tab"],
		"indent": 'off',

		"no-multi-assign": 'off',

		"no-nested-ternary": 'off',

		"no-unneeded-ternary": 'off',

		"object-shorthand": 'off',

		"prefer-destructuring": 'off',

		"prefer-spread": 'off',
	},
};
