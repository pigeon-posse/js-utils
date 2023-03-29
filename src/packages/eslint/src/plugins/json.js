/**
 * JSON PLUGIN CONFIGURATION.
 *
 * @description Set all json config.
 *
 * @example https://github.com/import-js/eslint-plugin-import/tree/main/docs
 * @version 1.0.0
 * @since 1.1.0
 */

module.exports = {
	'extends' : [
		'plugin:json/recommended',
	],
	'plugins' : [ 
		'json',
	],
	'rules' : {
		'json/*' : [
			'error', 
			{
				'allowComments' : false,
			},
		],
	},
}
