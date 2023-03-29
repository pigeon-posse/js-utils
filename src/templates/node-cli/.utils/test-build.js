/**
 * Test build file..
 *
 * @description Release config.
 */

import * as os        from 'os'
import { spawnSync }  from 'child_process'
import { join }       from 'path'
import { pkg }        from './getPkg.js'
import { existsSync } from 'fs'

const childProcess = ( value ) => {
    
	const userInfo = os.userInfo()

	console.group( 'Process: ' + value )
	
	spawnSync( value, {
		stdio : 'inherit',
		shell : true,
		uid   : userInfo.uid,
		gid   : userInfo.gid,
	} )

	console.groupEnd()

}

const exec = ( filepath, args ) => {

	if ( existsSync( filepath ) ) {

		childProcess( 'node ' + filepath + ' ' + args )
	
	}else {

		console.log( 'File not exist' )
	
	}

}

const set = () => {

	let mainPath, modulePath, args

	mainPath   = join( pkg.dir, pkg.data.main )
	modulePath = join( pkg.dir, pkg.data.module )
	args       = process.argv.slice( 2 )
	
	console.log( 'Common JS: ',mainPath )
	exec( mainPath, args )

	console.log()

	console.log( 'ESM JS: ',modulePath )
	exec( modulePath, args )

}

try{

	set()

}catch( e ){

}

