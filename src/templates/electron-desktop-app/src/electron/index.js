/**
 * Index file.
 *
 * @description Modules to control application life and create native browser window.
 */

/**
 * ***************************************************************************.
 * IMPORTS.
 * ***************************************************************************.
 */

import { app }     from 'electron' 
import { addTray } from './tray'

import data     from '../core/_data'
import { core } from '../core/main'

/**
 * ***************************************************************************.
 * DOCK.
 * ***************************************************************************.
 */
app.dock.setIcon( data.dockIcon )
app.dock.hide()

/**
 * ***************************************************************************.
 * APP
 * ***************************************************************************.
 */
app.disableHardwareAcceleration()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady()
	.then( () => {

		addTray( data )
		core( data )
		
		return

	} )
	.catch( e => console.error( e ) )

app.on( 'activate', () => {

	if ( process.platform == 'darwin' ) console.log( 'work' )

} )

// app.on( 
// 	'before-quit', 
// 	() => {

// 		console.log( 'kill process' )
// 		process.exit( 0 )
// 		// copycat.kill( 'SIGKILL' )

// 	}, 
// )
		
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on( 
	'window-all-closed', 
	() => {

		if ( process.platform !== 'darwin' ) app.quit()

	}, 
)

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/
