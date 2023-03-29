/**
 * Preload file.
 *
 * @description
 *  The preload script runs before. It has access to web APIs
 *  as well as Electron's renderer process modules and some
 *  polyfilled Node.js functions.
 *
 * @see https://www.electronjs.org/docs/latest/tutorial/sandbox.
 */
// import * as ElectronStore from 'electron-store'
// console.log( ElectronStore )

import ElectronStore from 'electron-store'

export const storageFunct = () => {

	let res

	res = new ElectronStore( )
	
	// if ( res.test ) {

	// 	res.set( 'test', true )
		
	// }

	return res

}

export const storage = storageFunct()
