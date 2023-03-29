/**
 * PUPPETEER JS.
 *
 * @description PUPPETEER JS.
 */

import { getNavigator } from './getNavigator.js'
import { execute }      from './execute.js';

( async () => {

	const nav = await getNavigator( 'firefox', { test: true } )
	
	if ( nav.exists == false ) return await nav.browser.close()

	await execute( nav )

	//await nav.browser.close()

} )()

