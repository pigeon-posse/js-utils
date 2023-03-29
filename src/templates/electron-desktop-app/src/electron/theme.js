/**
 * Preload file.
 *
 * @description
 *  The preload script runs before. It has access to web APIs
 *  as well as Electron's renderer process modules and some
 *  polyfilled Node.js functions.
 */

import { 
	ipcMain, 
	nativeTheme, 
} from 'electron'

export const theme = () => {

	ipcMain.handle( 'dark-mode:toggle', () => {

		if ( nativeTheme.shouldUseDarkColors ) {

			nativeTheme.themeSource = 'light'
		
		} else {

			nativeTheme.themeSource = 'dark'
		
		}
		return nativeTheme.shouldUseDarkColors
	
	} )

	ipcMain.handle( 'dark-mode:system', () => {

		nativeTheme.themeSource = 'system'
	
	} )

}
