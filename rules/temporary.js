module.exports = {
  rules: {
		"eol-last": 'off',

		"func-names": 'warn',

		// Maybe change to "never" later...
		"function-paren-newline": 'off',

		// Problem with Visual Studio for the moment.
		"indent": 'off',

		"no-multi-assign": 'off',

		"no-multiple-empty-lines": 'warn',

		"no-nested-ternary": 'off',

		"no-shadow": 'warn',

		// Problem with Visual Studio for the moment.
		"no-trailing-spaces": 'off',

		"no-unneeded-ternary": 'off',

		// Will be changed back to 'error'
		/*
			function myfunc(foo) {
				if (foo === 1) {
					return 'value1';
				} else if (foo === 2) {
					return 'value2';
				} else {
					return 'value3';
				}; // Because of semi-colon here, we get an error !!!
			};
		*/
		"no-unreachable": 'warn',

		"object-shorthand": 'off',

		"prefer-const": 'warn',

		"prefer-destructuring": 'off',

		"prefer-spread": 'off',

		// Will be changed back to ['error', 'always']
		"semi": ['warn', 'always'],

		// Will be changed back to 'error'
		"semi-spacing": 'warn',
	},
};