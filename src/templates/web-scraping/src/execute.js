/**
 * PUPPETEER JS.
 *
 * @description PUPPETEER JS.
 */

import { url }   from './utils/url.js'
import { funct } from './utils/funct.js'

const setExecute = async ( nav ) => {

	await url.goTo( nav, {
		url : 'https://pigeonposse.com',
	} )

	await funct.set( nav, {
		desc  : 'Function that returns data from pigeonposse.com',
		funct : async ( nav ) => {

			// Do something
			
		},
	} )

}

const tryExec = async ( nav ) => {

	try{

		await setExecute( nav )
	
	}catch( e ){

		console.groupCollapsed( '❌ Some execution process has not worked\n' )
		console.log( e )
		console.groupEnd()
	
	}

}

export const execute = async ( nav ) => {

	await tryExec( nav )

}
