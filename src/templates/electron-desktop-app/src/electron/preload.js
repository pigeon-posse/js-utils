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

import { 
	contextBridge, 
	ipcRenderer, 
} from 'electron'

window.addEventListener( 'DOMContentLoaded', () => {

	contextBridge.exposeInMainWorld( 'darkMode', {
		toggle : () => ipcRenderer.invoke( 'dark-mode:toggle' ),
		system : () => ipcRenderer.invoke( 'dark-mode:system' ),
	} )

} )
