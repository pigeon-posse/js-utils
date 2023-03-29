/**
 * Menu file.
 *
 * @description Contains template of menu.
 */

import { Menu } from 'electron' 

const createMenu = ( args, app = false, win = false ) => {

	return [
		{
			label   : '{{pp_template_name}}',
			submenu : [

			],
		},
	]

}

export const addMenu = ( args, app = false, win = false ) => {

	const menuTemplate = createMenu( args, app, win )
	const menu         = Menu.buildFromTemplate( menuTemplate )
	
	Menu.setApplicationMenu( menu )

}

