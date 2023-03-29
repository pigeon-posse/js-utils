/**
 * TEST CONFIG FILE.
 *
 * @description File for do a console log of config object.
 *
 * @version 1.0.0
 * @since 1.1.0
 */

const util   = require( 'util' )
const config = require( '../src/index' )

const objectConfig = util.inspect( 
	config, 
	{ 
		showHidden : false, 
		depth      : null, 
		colors     : true,
	}, 
)

console.log( 'PigeonPosse Eslint configuration: \n' )
console.log( objectConfig )
