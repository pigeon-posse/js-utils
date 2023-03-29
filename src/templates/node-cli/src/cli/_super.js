
/**
 * Super class for cmds.
 *
 * @description Super class for cmds.
 *
 */

import { not }  from '../utils/notifications.js'
import { text } from '../utils/text.js'

export class Cli {

	infoFiledefaultVersion = '1.0.0'

	constructor( args ) {
	
		this.args  = args
		this.utils = {
			not  : not,
			text : text,
		}

	}

}
