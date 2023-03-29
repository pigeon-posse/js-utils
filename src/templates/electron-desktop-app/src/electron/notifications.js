/**
 * Todo.
 *
 * @description Todo.
 */

import { Notification } from 'electron' 

export const addNot = ( args, txt ) => {

	new Notification( { 
		title : args.name,
		body  : txt,
		icon  : args.appIcon,
	} ).show()

}
