module.exports = {
  rules: {
		"eol-last": 'off',

		"func-names": 'off',

		// Maybe change to "never" later...
		"function-paren-newline": 'off',

		// Problem with Visual Studio for the moment.
		"indent": 'off',

		"no-multi-assign": 'off',

		"no-nested-ternary": 'off',

		// Problem with Visual Studio for the moment.
		"no-trailing-spaces": 'off',

		"no-unneeded-ternary": 'off',

		"object-shorthand": 'off',

		"prefer-destructuring": 'off',

		"prefer-spread": 'off',
		
		// False positive on Bootstrap:373 (array-like section of "types.keys")
		"guard-for-in" : "off",
	},
};