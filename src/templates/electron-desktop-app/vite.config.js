/**
 * Vite config.
 *
 * @description Descrip.
 *
 * @since 1.0.0
 * @version 1.0.0
 */

import fs       from 'fs'
import path     from 'path'
import electron from 'vite-plugin-electron'
import * as pkg from './package.json'

const dir = {
	electron            : pkg.custom.projectPath.source.electron + '/',
	pages               : pkg.custom.projectPath.source.pages + '/',
	buildElectron       : pkg.custom.projectPath.dist.electron + '/',
	buildPages          : pkg.custom.projectPath.dist.pages + '/',
	pagesToProject      : pkg.custom.projectPath.source.pagesToProject,
	buildPagesToProject : pkg.custom.projectPath.dist.pagesToProject,
}

fs.rmSync( pkg.custom.projectPath.dist.own, { recursive: true, force: true } )

const rollupOptions = {
	input : {
		index : path.join( __dirname, dir.pages + 'index.html' ),
		// preferences : path.join( __dirname, dir.pages + 'preferences.html' ),
		about : path.join( __dirname, dir.pages + 'about.html' ),

	},
	output : dir.pagesToProject + dir.buildPages,
}
const electronVite  = {
	server : {
		sourcemap : true,
	},
	build : {
		outDir : dir.buildElectron,
		minify : true,
	},
}

export default {
	root   : dir.pages, 
	server : {
		port : '1312',
		base : dir.pages,
	},
	build : {
		outDir        : dir.pagesToProject + dir.buildPages,
		minify        : true,
		rollupOptions : rollupOptions,
	},
	plugins : [
		electron( {
			main : {
				entry : dir.electron + 'index.js',
				vite  : electronVite,
			},
			preload : {
				input : {
					preload : path.join( __dirname, dir.electron + 'preload.js' ),
				},
				vite : electronVite,
			},
		} ),
	],
}
