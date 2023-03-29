import { readdirSync, readFileSync, existsSync } from 'fs'
import { join }                                  from 'path'
import * as url                                  from 'url'

const __filename  = url.fileURLToPath( import.meta.url )
const __dirname   = url.fileURLToPath( new URL( '.', import.meta.url ) )
const json        = ( path ) => JSON.parse( readFileSync( path ) )
const projectPath = join( __dirname, '..' )
const pkgMonoPath = join( projectPath, 'package.json' )
const pkgMono     = json( pkgMonoPath )

const getPkgPaths = ( dirPath, type = 'path' ) => {

	let entries, folders, res

	res     = {}
	entries = readdirSync( dirPath, { withFileTypes: true } )
	folders = entries.filter( ( entry ) => entry.isDirectory() )

	folders.forEach( folder => {

		let path 

		path = type == 'dir' ? join( dirPath, folder.name ) : join( dirPath, folder.name, 'package.json' )
	
		if ( existsSync( path ) ) res[folder.name] = type == 'data' ? json( path ) : path
	
	} )

	return res

}

const getPkgsFromWorkspaces = ( workspaces, type = 'path' ) => {

	let res

	res = {
		workspace : type == 'data' ? pkgMono : pkgMonoPath,
	}
	if ( type == 'dir' ) res.workspace = projectPath

	workspaces.forEach( workspace => {
		
		let spacePath, dirName
		
		workspace = workspace.endsWith( '*' ) ? workspace.replace( '*','' ) : workspace
		spacePath = join( __dirname, '..', workspace )

		if ( spacePath ) {

			res = {
				...res,
				...getPkgPaths( spacePath, type ),
			}
		
		}

	} )

	return res 

}

export const pkgs = {
	path : getPkgsFromWorkspaces( pkgMono.workspaces ),
	dir  : getPkgsFromWorkspaces( pkgMono.workspaces, 'dir' ),
	data : getPkgsFromWorkspaces( pkgMono.workspaces, 'data' ),
}

