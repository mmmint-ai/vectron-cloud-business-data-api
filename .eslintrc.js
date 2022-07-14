module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'jsdoc', 'header', 'node', 'jest'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsdoc/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	rules: {
		"no-caller": "error",
		"no-unreachable": 'error',
		"no-useless-call": 'error',
		"no-unused-expressions": 'error',
		"@typescript-eslint/no-use-before-define": 'off', // used in test
		"yoda": "error",
		"eqeqeq": "error",
		"no-unused-vars": ["error", { args: "none", ignoreRestSiblings: true }],
		"node/no-missing-require": ["error", { allowModules: ["webpack"] }],
		"header/header": [2, "header.js"],
		"@typescript-eslint/naming-convention": [
			"error",
			// Code Styling mmmint
			{
				"selector": "enumMember",
				"format": ["camelCase", "UPPER_CASE"]
			},
		],
		'jsdoc/require-jsdoc': ['error', { contexts: ['ClassDeclaration', 'ClassProperty', 'FunctionDeclaration', 'MethodDefinition'] }],
		'jsdoc/require-description': 'off',
		'jsdoc/require-param-description': 'off',
		'jsdoc/require-returns': 'off',
		'jsdoc/require-returns-type': 'off',
		'jsdoc/require-returns-description': 'off',
		'jsdoc/require-param-type': 'off', // Disable for this now - as typescript should enforce param type and doc just a description.
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'curly': 'error',
		'brace-style': 'error',
		// https://nicedoc.io/prettier/eslint-config-prettier#user-content-lines-around-comment
		"lines-around-comment": [
			"error",
			{
				"beforeBlockComment": true,
				"beforeLineComment": true,
				"afterBlockComment": false,
				"afterLineComment": false,
				"allowBlockStart": true,
				"allowBlockEnd": false,
				"allowObjectStart": true,
				"allowObjectEnd": false,
				"allowArrayStart": false,
				"allowArrayEnd": false,
				"allowClassStart": true,
				"allowClassEnd": true
			}
		],
		'newline-before-return': 'error',
		'multiline-comment-style': 'warn',
	},
};
