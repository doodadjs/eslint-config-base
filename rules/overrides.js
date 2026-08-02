module.exports = {
	// Prefered over the "camelcase" rule.
	"id-match": ["error", "(^[$]?[_]*[a-z][a-z0-9]*([A-Z][A-Za-z0-9]*)*[_]*$)|(^[_]*[A-Z]+([_][A-Z0-9]+)*[_]*$)|(^[_]*([A-Z][A-Za-z0-9]*)+[_]*$)|(^execute_[A-Z]+$)"],

	// Function signature
	"no-unused-vars": ['error', {args: 'none'}],

	// Maybe, but I like it !
	"no-cond-assign": "off",
};