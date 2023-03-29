/**
 * Preload file.
 *
 * @description
 *  The preload script runs before. It has access to web APIs
 *  as well as Electron's renderer process modules and some
 *  polyfilled Node.js functions.
 */

import {
	shell,
	Tray, 
	Menu, 
} from 'electron' 

import { Win } from './window.js'

const trayMenu = ( args ) => {
	
	let win = new Win( args )

	return [
		{ 
			label : 'Option', 
			click : async ( ) => {

				await shell.openExternal( args.donateUrl )

			},
		},
		// {
		// 	label : 'Preferences',
		// 	click : async () => {

		// 		win.closeAllWins()
		// 		if ( !win.isOpened( 'preferences' ) ) win.preferences()
			
		// 	},
		// },

		{ 
			type : 'separator', 
		},
		{
			label : 'About',
			click : async () => {
				
				win.closeAllWins()
				if ( !win.isOpened( 'about' ) ) win.about()
			
			},
		},
		{
			label : 'Donate',
			click : async () => {

				await shell.openExternal( args.donateUrl )
			
			},
		},
		{ 
			type : 'separator', 
		},
		{ 
			label : 'Quit from ' + args.name,
			role  : 'quit',
		},
	]

}

export const addTray = ( args ) => {

	let tray, menuInfo

	menuInfo = trayMenu( args )
	menuInfo = Menu.buildFromTemplate( menuInfo )

	tray = new Tray( args.iconTemplate )
	tray.setImage( args.iconTemplate )
	tray.setPressedImage( args.iconTemplate )
	tray.setToolTip( args.name )
	// tray.setTitle( '' )
	tray.setContextMenu( menuInfo )

}

