module.exports = {
  rules: {
		// Replaced by the "id-match" rule.
		"camelcase": "off",

		// We don't mind
		"comma-dangle": 'off',

		// We don't mind
		"dot-notation": 'off',

		// Prefered over the "camelcase" rule.
		"id-match": ["error", "(^[$]?[_]*[a-z][a-z0-9]*([A-Z][A-Za-z0-9]*)*[_]*$)|(^[_]*[A-Z]+([_][A-Z0-9]+)*[_]*$)|(^[_]*([A-Z][A-Za-z0-9]*)+[_]*$)|(^execute_[A-Z]+$)"],

		// We prefer no spacing.
		"keyword-spacing": 'off',

		// We don't mind
		"lines-around-directive": "off",

		// Grab a modern and graphical editor.
		'max-len': 'off',

		// Some variables are assigned a constructor.
		"new-cap": 'off',

		// What ?
		"no-bitwise": 'off',

		// What ?
		"no-continue": 'off',

		// What ?
		"no-else-return": 'off',

		// What ?
		"no-extra-label": 'off',

		// ASI ?
		"no-extra-semi": 'off',

		// What ?
		"no-labels": 'off',

		// What ?
		"no-lonely-if": 'off',

		// a && b || c
		"no-mixed-operators": 'off',

		// What ???
		"no-multi-spaces": 'off',

		// We mostly does parameter validation and conversion (cast).
		"no-param-reassign": 'off',

		// What ?
		"no-plusplus": 'off',

		// for...of
		"no-restricted-syntax": 'off',

		// I admit: I'm missing imagination for variable and argument names.
		"no-shadow": 'off',

		// We prefer tabs over spaces
		"no-tabs": 'off',

		// Like to be explicit.
		"no-undef-init": 'off',

		// What ?
		"no-underscore-dangle": 'off',

		// DD_ASSERT && DD_ASSERT(...)
		"no-unused-expressions": 'off',

		// Function signature
		"no-unused-vars": ['error', {args: 'none'}],

		// No
		"object-curly-newline": 'off',

		// What ?
		"object-curly-spacing": 'off',

		// No, "const/let/var" can declare more than one variables at once.
		"one-var": 'off',

		// That makes code more readable for me.
		"padded-blocks": 'off',

		// Nope, a function is fine too.
		"prefer-arrow-callback": 'off',

		// Not sure
		"prefer-template": 'off',

		// We don't care
		"quote-props": 'off',

		// Strings are either single or double quotes, ok ?
		"quotes": "off",

		// What ?
		"space-before-function-paren": 'off',

		// Readability
		"space-in-parens": 'off',

		// Some comments are just argument names
		"spaced-comment": 'off',

		// Yes, but "inside" instead of "outside".
		"wrap-iife": ['error', 'inside'],
	},
};