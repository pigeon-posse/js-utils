/**
 * Package function.
 *
 * @description Get package.json data, path or dir.
 */

import { readFileSync } from 'fs'
import { join }         from 'path'
import * as url         from 'url'

const __filename  = url.fileURLToPath( import.meta.url )
const __dirname   = url.fileURLToPath( new URL( '.', import.meta.url ) )
const json        = ( path ) => JSON.parse( readFileSync( path ) )
const projectPath = join( __dirname, '..' )
const pkgPath     = join( projectPath, 'package.json' )
const pkgData     = json( pkgPath )

export const pkg = {
	path : pkgPath,
	dir  : projectPath,
	data : pkgData,
}

