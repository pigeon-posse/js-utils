/**
 * WINDOW file.
 *
 * @description Description.
 */
 
import { join }          from 'path'
import { BrowserWindow } from 'electron'
import { theme }         from './theme'
import * as pkg          from '../../package.json'

const preloadFile = join( __dirname, 'preload.js' )

export class Win{

	winArgs = {
		width          : 800,
		height         : 600,
		webPreferences : {
			preload : preloadFile
			,
		},
		// titleBarStyle : 'hidden',
	} 

	constructor( args ){

		this._args        = args
		this.openedWinIds = []
	
	}

	loadFile( win, fileName ){

		if ( this._args.isDev ) {

			win.loadURL( process.env.VITE_DEV_SERVER_URL + fileName + '.html' )
	
		}else {

			win.loadFile( pkg.custom.projectPath.dist.pages + '/' + fileName + '.html' )
	
		}
	
	}

	closeAllWins() {

		let wins 

		wins = BrowserWindow.getAllWindows()
		wins.forEach( win => win.close() )
	
	}
	
	rmOpenedWinId( id ){

		let res = []

		this.openedWinIds.forEach( win => {

			if ( win != id ) res.push( win )

		} )
	
		return res
	
	}

	isOpened( id ){

		if ( this.openedWinIds.includes( id ) ) return true

		return false
	
	}

	constructWindow( pageName, args ) {

		// Create the browser window.
		const win = new BrowserWindow( args )

		// and load the index.html of the app.
		this.loadFile( win, pageName )

		// Theme
		// theme() // Error: Attempted to register a second handler for 'preload'

		// dev tools
		if ( this._args.isDev ) win.webContents.openDevTools()

		win.on( 'close', () => { 

			this.openedWinIds = this.rmOpenedWinId( pageName )
		
		} )

		return win

	}
	
	index() {

		let id            = 'index'
		this.openedWinIds = this.openedWinIds.concat( id )

		this.constructWindow(
			id,
			{
				...this.winArgs,
				...{},
			},
		)

	}

	about() {

		let id            = 'about'
		this.openedWinIds = this.openedWinIds.concat( id )

		this.constructWindow(
			id,
			{
				...this.winArgs,
				...{
					height         : 285,
					width          : 370,
					// title          : pkg.name + ' - ' + id.toUpperCase( ),
					resizable      : false,
					minimizable    : true,
					maximizable    : false,
					fullscreenable : false,
					movable        : true,
				},
			},
		)
	
	}

	preferences() {
		
		let id            = 'preferences'
		this.openedWinIds = this.openedWinIds.concat( id )

		this.constructWindow(
			id,
			{
				...this.winArgs,
				...{
					resizable      : false,
					minimizable    : true,
					maximizable    : false,
					fullscreenable : false,
					movable        : true,
				},
			},
		)

	}

}
