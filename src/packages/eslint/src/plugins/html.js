/**
 * HTML PLUGIN CONFIGURATION.
 *
 * @description Set all html config.
 *
 * @example https://github.com/BenoitZugmeyer/eslint-plugin-html
 * @version 1.0.0
 * @since 1.1.0
 */

module.exports = {
	'plugins' : [ 
		'html',
	],
	'settings' : {
		'html/report-bad-indent'    : 'error',
		'html/xml-extensions'       : [ '.html' ],
		'html/javascript-tag-names' : [ 'script' ],
		'html/indent'               : '+tab',
	},
}

