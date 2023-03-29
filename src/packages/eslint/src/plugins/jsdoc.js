/**
 * JSDOC PLUGIN CONFIGURATION.
 *
 * @description Set all jsdoc config.
 *
 * @example https://github.com/gajus/eslint-plugin-jsdoc/tree/master/.README
 * @version 1.0.0
 * @since 1.1.0
 */

module.exports = {
	'extends' : [ 
		'plugin:jsdoc/recommended',
	],
	'plugins' : [ 
		'jsdoc',
	],
	'rules' : {
		'jsdoc/require-jsdoc' : [
			'error', 
			{
				'require' : {
					//'ArrowFunctionExpression' : true,
					'ClassDeclaration'    : true,
					'ClassExpression'     : true,
					'FunctionDeclaration' : true,
					//'FunctionExpression'  : true,
					'MethodDefinition'    : true,
				},
			},
		],
		'jsdoc/require-description' : [
			'error', 
			{
				'descriptionStyle' : 'body',
			},
		],
		'jsdoc/require-hyphen-before-param-description' : [
			'error', 
			'always',
			{
				'tags' : {
					'param'   : 'always',
					'returns' : 'always',
				},
			},
		],
		'jsdoc/require-file-overview' : [
			'error', 
			{
				'tags' : {
					'version' : {
						'mustExist'           : true,
						'initialCommentsOnly' : true,
						'preventDuplicates'   : false,
					},
					'since' : {
						'mustExist'           : true,
						'initialCommentsOnly' : true,
						'preventDuplicates'   : false,
					},
					'description' : {
						'mustExist'           : true,
						'initialCommentsOnly' : true,
						'preventDuplicates'   : false,
					},
				},
			},
		],
		'jsdoc/sort-tags' : [
			'error',
		],
		'jsdoc/check-line-alignment' : [
			'error', 
			'always',
			{
				'tags' : [
					'version',
					'description',
					'since',
					'param',
					'returns',
					'todo',
				],
			},
		],
		// 'jsdoc/require-description-complete-sentence' : [
		// 	'error', 
		// 	{
		// 		'tags' : [
		// 			'param', 
		// 			'returns', 
		// 			'description',
		// 		],
		// 	},
		// ],
		'jsdoc/tag-lines' : [
			'error', 
			'never',
			{
				'noEndLines' : true,
				'tags'       : {
					'description' : {
						'count' : 1,
						'lines' : 'always',
					},
					'since' : {
						'count' : 1,
						'lines' : 'always',
					},
					'author' : {
						'count' : 1,
						'lines' : 'always',
					},
					'todo' : {
						'count' : 1,
						'lines' : 'always',
					},
				},
			},
		],
		'jsdoc/valid-types' : [
			'error',
			{ 
				allowEmptyNamepaths   : true, 
				checkSeesForNamepaths : false, 
			},
		],
	},
	'overrides' : [
		{
			'files' : [ '*.json' ],
			'rules' : {
				'jsdoc/require-file-overview' : [
					'error',
					{
						'tags' : {
						},
					},
				],
			},
		},
	],
}
