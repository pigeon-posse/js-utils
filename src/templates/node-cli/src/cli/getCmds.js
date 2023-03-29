
/**
 * Class for get cmds.
 *
 * @description Class for get cmds.
 *
 */

import { Test }    from './cmds/test'
import { Help }    from './flags/help'
import { Version } from './flags/version'

export class Cmds {

	constructor( args ) {

		this.args  = args
		this.opts  = [ Test ]
		this.flags = [ Help, Version ]

	}

	#getType( types, arg ) {

		let res 

		res = {
			exists : false,
		}
        
		types.forEach( value => {

			let klass = new value( this.args )
			
			if ( klass.cmds.includes( arg ) || klass.aliases.includes( arg ) ) {

				res.exists = true 
				res.funct  = klass.run()
            
			}
        
		} )

		return res
    
	}

	getOpts( arg ) {

		return this.#getType( this.opts, arg )
	
	}

	getFlags( arg ){

		return this.#getType( this.flags, arg )
	
	}

}
