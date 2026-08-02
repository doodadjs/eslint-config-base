const js = require('@eslint/js');

module.exports = {
    configs: {
        recommended: {
            rules: {
                ...js.configs.recommended.rules,
                ...require('./rules/overrides'),
                ...require('./rules/temporary'),
            },
        },
    },
};