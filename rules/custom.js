module.exports = {
  rules: {
		// "no-unreachable" patch for empty statements.
		/*
			function myfunc(foo) {
				if (foo === 1) {
					return 'value1';
				} else if (foo === 2) {
					return 'value2';
				} else {
					return 'value3';
				}; // <-- Because of semi-colon here, we was geting an error !!!
			};
		*/
		"no-unreachable": 'off',
		"@doodad-js/doodad/no-unreachable": 'error',

		// "indent" doesn't appropriately indent comments.
		// Apply directives. Ex.:  IF() ... ELSE() ... END_IF()
		"indent": "off",
		"@doodad-js/doodad/indent": ["error", "tab"]
	},
};