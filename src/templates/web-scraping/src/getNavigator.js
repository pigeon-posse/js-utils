/**
 * PUPPETEER JS.
 *
 * @description PUPPETEER JS.
 */
import puppeteer from 'puppeteer'

export const getNavigator = async ( type = 'chrome', args = false ) => {

	const navigatorFunct = async ( { name, args = {}, validateFuntion = false } ) => {

		const browser = await puppeteer.launch( args )
		const page    = await browser.newPage()

		let res = {
			exists  : false,
			page    : page,
			browser : browser,
		}	

		if ( validateFuntion == false ) return res

		try{

			const isUsingBrowser = await validateFuntion( browser, page )

			if ( !isUsingBrowser ) {

				console.log( `🛑 Not using ${name}. Closing...` )
				return res
			
			}

			console.log( `✅ Using ${name}. Continuing...` )
			res.exists = true
			return res
		
		}catch( e ){

			console.log( `❌ Browser ${name} doesnt exist.` )
			return res
		
		}
	
	}
	
	const setNavigator = async ( type, args ) => {

		let res, openApp

		res     = false
		openApp = args && args['test'] !== undefined ? !args.test : true

		switch( type ) {

			case 'tor' :
				res = await navigatorFunct( {
					name : 'Tor',
					args : {
						args : [ 
							'--proxy-server=socks5://127.0.0.1:9050',
						],
						headless : openApp,
					}, 
					validateFuntion : async ( browser, page ) => {

						await page.goto( 'https://check.torproject.org' )
						return await page.$eval( 'body', ( el ) =>
							el.innerHTML.includes( 'Congratulations. This browser is configured to use Tor' ),
						)
				
					},
				} )
				break
			case 'firefox' : 
				res = await navigatorFunct( {
					name : 'Firefox',
					args : {
						product           : 'firefox',
						ignoreHTTPSErrors : true,
						headless          : openApp,
					}, 
					validateFuntion : async ( browser, page ) => {
						
						let nav = await page.evaluate( () => navigator.userAgent )

						if ( nav.match( /Firefox|firefox|fxios/i ) ) return true 

						return false
					
					},
				} )
				break
			case 'chrome' :
				res = await navigatorFunct( {
					name : 'Chrome',
					args : {
						headless : openApp,
					}, 
					validateFuntion : async ( browser, page ) => {

						let nav = await page.evaluate( () => navigator.userAgent )
			
						if ( nav.match( /Chrome|chrome|chromium|crios/i ) ) return true 

						return false
					
					},
				} )	
				break	
			default :
				res = false
		
		}
		
		return res

	}

	return await setNavigator( type, args )

}

