/**
 * Bundle config.
 *
 * @description Bundle config: esbuild.config.js.
 *
 * @see https://esbuild.github.io/api/
 */

import esbuild from 'esbuild'
import babel   from 'esbuild-plugin-babel'
import { pkg } from './.utils/getPkg.js'

const projectPaths = pkg.data.extra.projectPath
const buildCommon  = {
	entryPoints : [ projectPaths.src.entry ],
	bundle      : true,
	minify      : true,
	platform    : 'node',
	outfile     : pkg.data.main,
	plugins     : [
		babel(),
	],
	format : 'cjs',
}
	
const buildEsm = {
	entryPoints : [ projectPaths.src.entry ],
	bundle      : true,
	minify      : true,
	platform    : 'node',
	outfile     : pkg.data.module,
	format      : 'esm',
}
    
esbuild
	.build( buildCommon )
	.catch( () => process.exit( 1 ) )

esbuild
	.build( buildEsm )
	.catch( () => process.exit( 1 ) )
