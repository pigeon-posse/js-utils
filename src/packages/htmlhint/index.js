#!/usr/bin/env node

/**
 * INDEX FILE.
 *
 * File used to create the cli.
 *
 * Since version 1.1.2.
 */

import * as path         from 'path';
import { fileURLToPath } from 'url';
import { execFile }      from 'child_process';
import * as fs           from 'fs';

const __dirname   = path.dirname( fileURLToPath( import.meta.url ) );
const json        = path.resolve( __dirname, '.htmlhintrc.json' );
const htmlhintBin = ( () => {

	let file;

	file = path.resolve( __dirname, 'node_modules/.bin/htmlhint' );
  
	if ( fs.existsSync( file ) ) {

		return file;
	
	}

	file = './node_modules/.bin/htmlhint';

	if ( fs.existsSync( file ) ) {

		return file;
	
	}

	console.error( 'You have to install Htmlhint package' );
	console.log( 'You can install the package with: npm install htmlhint' );

	return false;

} )();

const execFunct = ( name, args = {} ) => {

	execFile( 
		name,
		args,
		( error, stdout, stderr ) => {

			if ( stdout ) {

				console.log( stdout );
			
			}

			if ( stderr ) {

				console.log( stderr );
			
			}
		
		}, 
	);

};

if ( htmlhintBin ) {
	
	execFunct( htmlhintBin, [ '-c', json ] );

}

