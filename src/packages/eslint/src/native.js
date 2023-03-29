/**
 * ESLINT NATIVE CONFIGURATION.
 *
 * @description Set all native config.
 *
 * @example https://eslint.org/docs/latest/user-guide/configuring/
 * @version 1.0.0
 * @since 1.1.0
 */

module.exports = {
	'ignorePatterns' : [
		'**/vendor/*.js', 
		'**/node_modules/*.js',
		'**/build/*.js',
		'**/dist/*.js',
		'**/package-lock.json',
		'**/package.json',
	],
	'env' : {
		'browser'  : true,
		'node'     : true,
		'commonjs' : true,
		'es2022'   : true,
		'jquery'   : true,
		'jest'     : true,
	},
	'extends' : [ 
		'eslint:recommended',
	],
	'parserOptions' : {
		'ecmaVersion' : 'latest',
		'sourceType'  : 'module',
	},
	'rules' : {
		// SWITCH
		'switch-colon-spacing' : 'error',
		'default-case'         : 'error',
		'default-case-last'    : 'error',
		// PARENTHESIS
		'space-in-parens'      : [ 'error', 'always' ],
		// OPERATORS
		'space-infix-ops'      : 'error',
		// VARIABLES
		'one-var'              : [
			'error', 
			{
				'var'   : 'always',
				'let'   : 'always',
				'const' : 'never',
			},
		],
		'vars-on-top'           : 'warn',
		// BLOCKS
		'padded-blocks'         : [ 'error', 'always' ],
		// ARRAY AND OBJECTS
		'object-curly-spacing'  : [ 'error', 'always' ],
		'array-bracket-spacing' : [ 'error', 'always' ],
		'comma-dangle'          : [ 'error', 'always-multiline' ],
		// COMMENTS
		'no-inline-comments'    : 'error',
		// GENERAL / PAGE
		'indent'                : [ 'error', 'tab', { 'SwitchCase': 1 } ],
		'linebreak-style'       : [ 'error', 'unix' ],
		'eol-last'              : [ 'error', 'always' ],
		'semi'                  : [ 'error', 'never' ],
		'quotes'                : [ 'error', 'single' ],
		'camelcase'             : [ 'warn' ],
		'key-spacing'           : [
			'error',
			{
				'multiLine' : {
					'beforeColon' : true,
					'afterColon'  : true,
				},
				'align' : {
					'beforeColon' : true,
					'afterColon'  : true,
					'on'          : 'colon',
				},
			},
		],
		'no-multiple-empty-lines' : [
			'error',
			{ 'max': 1, 'maxEOF': 1, 'maxBOF': 1 },
		],	
		'no-multi-spaces' : [ 
			'error', { 
				'exceptions' : { 
					'ImportDeclaration'    : true,
					'VariableDeclarator'   : true,
					'AssignmentExpression' : true,
				}, 
			},
		],
	}, 
}
