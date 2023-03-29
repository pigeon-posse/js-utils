/**
 * LINTER INDEX FILE.
 *
 * @description Set linter config :
 *  - Get all configs and merge it in object.
 *  - Set eslint configuration.
 *
 * @version 1.0.0
 * @since 1.1.0
 */

const mergeObject            = require( './utils/mergeObject' )
const native                 = require( './native' )
const pluginAlignAssignments = require( './plugins/alignAssignments' )
const pluginAlignImport      = require( './plugins/alignImport' )
const pluginHtml             = require( './plugins/html' )
const pluginImport           = require( './plugins/import' )
const pluginJsdoc            = require( './plugins/jsdoc' )
const pluginJson             = require( './plugins/json' )
const pluginPromise          = require( './plugins/promise' )

/**
 * Merged config.
 */
const config = mergeObject(
	native, 
	pluginAlignAssignments,
	pluginAlignImport,
	pluginHtml,
	pluginImport,
	pluginJsdoc,
	pluginJson,
	pluginPromise,
)

module.exports = config
