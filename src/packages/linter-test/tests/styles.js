#!/usr/bin/env node

import * as path         from 'path';
import { fileURLToPath } from 'url';
import { execSync }      from 'child_process';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const json      = path.resolve( __dirname, '.htmlhintrc.json' );
const htmlhint  = path.resolve( __dirname, 'node_modules/.bin/htmlhint' );

const execFunct = ( name, args = {} ) => {

	execSync( 
		name,
		args, 
		( error, stdout, stderr ) => {

			if ( error ) {

				console.error(  `error: ${error.message}` );
				return;
			
			}

			if ( stdout || stderr ) {

				console.log( cmd, __dirname );
			
			}
			console.log( 'do it' );
		
		}, 
	);

};

//const cmd       = '"'+htmlhint + '" -c "'+ json+'"';
const cmd = './node_modules/.bin/htmlhint -c ./.htmlhintrc.json';

execFunct( 'npm run hint', { cwd: __dirname } );

