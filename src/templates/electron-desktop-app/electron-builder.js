/**
 * Electron builder.
 *
 * @description Descrip.
 *
 * @see https://www.electron.build/configuration/configuration
 * @since 1.0.0
 * @version 1.0.0
 */

var pjson = require( './package.json' )

module.exports = {
	'appId'       : `com.${pjson.name}.app`,
	'productName' : `${pjson.name}`,
	'copyright'   : `Copyright © ${ new Date().getFullYear() } ${pjson.custom.collective.name}`,
	'asar'        : true,
	'directories' : {
		'output' : `${pjson.custom.projectPath.dist.release}/${pjson.version}`,
	},
	'files' : [
		'dist',
	],
	'extraFiles' : [
		{
			'from'   : `${pjson.custom.projectPath.source.images}`,
			'to'     : `Resources/${pjson.custom.projectPath.dist.resourcesSubFolder}`,
			'filter' : [ '**/*' ],
		},
		// `./${pjson.custom.projectPath.source.images}/**`,
	],
	'mac' : {
		'artifactName' : '${productName}_${version}.${ext}',
		'target'       : [
			'dmg',
		],
		'icon' : `${pjson.custom.projectPath.source.images}/app-icon.png`,
		// 'backgroundColor' : '',
	},
	// 'dmg' : {
	// 	'window' : {
	// 		'height' : '200',
	// 	},
	// },

}
