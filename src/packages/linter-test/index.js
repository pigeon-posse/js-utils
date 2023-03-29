#!/usr/bin/env node

import { execSync } from 'child_process';

const execFunct = ( name, args = {} ) => {

	execSync( 
		name,
		args, 
		( error, stdout, stderr ) => {

			if ( error ) {

				console.error(  `error: ${error.message}` );
				return;
			
			}
		
		}, 
	);

};

execFunct( 'htmlhint --config ./.htmlhintrc.json' );