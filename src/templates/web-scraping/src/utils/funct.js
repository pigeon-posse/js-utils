/**
 * PUPPETEER JS.
 *
 * @description PUPPETEER JS.
 *
 * @author   Angelo <angelo@pigeonposse.com>.
 *
 * @since 1.0.0
 * @version 1.0.0
 */

const set = async ( nav, args ) => {

	if ( !args || !args.funct ) return console.log( '❌ You have to set function' )

	if ( args.desc ) console.log( 'ℹ️  ' + args.desc )
	
	await args.funct( nav )

}

export const funct = {
	set : set,
}
