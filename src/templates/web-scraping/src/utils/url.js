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

const goTo = async ( nav, args ) => {

	if ( !args || !args.url ) return console.log( '❌ You have to set url' )

	await nav.page.goto( args.url )
	console.log( '🔗 Go to url: ' + args.url )

}

export const url = {
	goTo : goTo,
}
