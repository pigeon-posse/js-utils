
/**
 * Class for cmds [script-name].
 *
 * @description Class for cmds [script-name].
 *
 */
import { Cli } from '../_super'

export class Test extends Cli {

	constructor( args ) {

		super( args )
		this.cmds    = [ 'test' ]
		this.aliases = [ 't' ]
        
	}
    
	run(){

		// Do something
		console.log( 'Hello pigeon 🐦🌈' )
	
	}

}
