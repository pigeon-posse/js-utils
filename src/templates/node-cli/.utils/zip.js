/**
 * Zip function.
 *
 * @description Zip function.
 */

import fs       from 'fs'
import path     from 'path'
import archiver from 'archiver'
import { pkg }  from './getPkg'

const projectPath = pkg.data.extra.projectPath

const zipDirectory = ( sourceDir, outPath ) => {
	
	const archive = archiver( 'zip', { zlib: { level: 9 } } )
	const stream  = fs.createWriteStream( outPath )

	return new Promise( ( resolve, reject ) => {

		archive
		    // .directory( sourceDir, false )
			.on( 'warning', err => console.log( `WARN -> ${err}` ) )
		    .on( 'error', err => reject( err ) )
		    .pipe( stream )

		stream
			.on( 'close', () => resolve() )
			.on( 'end', () => console.log( 'Data has been drained' ) )

		archive.finalize()

	} )

}

try{

	const execsPath = path.join( pkg.dir, projectPath.dist.execs )
	const zipPath   = path.join( pkg.dir, projectPath.dist.zip )
	
	if ( !fs.existsSync( pkg.dir ) || !fs.existsSync( execsPath ) ) throw console.error( 'Exec dist not exist' )
	if ( fs.existsSync( zipPath ) ) fs.rmSync( zipPath, { recursive: true } )

	fs.mkdirSync( zipPath )

	const execsfiles = fs.readdirSync( execsPath ).map( file => {

		if ( !file.startsWith( '.' ) ) {

			return {
				name : file,
				path : path.join( execsPath, file ),
			}
		
		}
	
	} )

	if ( !execsfiles ) throw console.error( 'Not exist executables' )
	
	execsfiles.forEach( file => {

		if ( !file ) return

		let zip 

		zip = path.join( zipPath, file.name + '.zip' )
		
		// console.log( 'Exec path: ' + file.path )
		// console.log( 'Zip path: ' + zip )

		// zipDirectory( file.path, zip )
		// console.log( '🟢 ' + file.name + ' Zipped!' )
	
	} )

}catch( e ){

	throw Error( e )

}
