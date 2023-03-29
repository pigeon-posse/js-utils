/**
 * ALIGN ASSIGNMENTS PLUGIN CONFIGURATION.
 *
 * @description Set all align-assignments config.
 *
 * @example https://www.npmjs.com/package/eslint-plugin-align-assignments
 * @version 1.0.0
 * @since 1.1.0
 */

const standard = {
	'plugins' : [ 
		'align-assignments', 
	],
	'rules' : {
		'align-assignments/align-assignments' : [
			'error',
			{ 'requiresOnly': false },
		],
	}, 
}

const soft = standard
const strict = standard

module.exports = {
	'standard' : standard,
	'soft' : soft,
	'strict' : strict
}
