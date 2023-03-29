
/**
 * Run application.
 *
 * @description File that runs the app.
 *
 */

import { Version } from './version.js'

export class Help extends Version {
   
	constructor( args ) {

		super( args )
		this.cmds    = [ '--help' ]
		this.aliases = [ '-h' ]
        
	}
	
	#txtStyle( title, desc ){

		return this.utils.not.standard( 
			this.utils.text.infoBg( ' ' + title + ' ' ) + ' ' + desc, 
		)
	
	}
	
	#groupStyle( title, desc ){

		return this.utils.not.group( 
			this.utils.text.infoBg( ' ' + title + ' ' ), 
			this.utils.text.blankLine + desc + this.utils.text.blankLine, 
		)
	
	}

	#infoTxt( cliName ) {
		
		let title, desc 

		title = 'Description'
		desc  = 'CMD [ ' + cliName + ' ] '
		desc += 'is Lorem ipsum'
		desc += this.utils.text.blankLine + this.utils.text.blankLine
		desc += 'following guide at:'
		desc += this.utils.text.blankLine
		desc += this.utils.text.infoLink( 'https://github.com/pigeonposse/{{pp_template_name}}' )
		//desc += this.utils.text.blankLine

		return this.#groupStyle( title, desc )

	}
	
	#usageDescTxt( data, cliName ){

		let res, optGroup, optName, optDesc, maxLength

		res = ''

		Object.keys( data ).forEach( key => {

			optGroup  = key
			maxLength = Object.keys( data[key] ).reduce( ( a, b ) => a.length > b.length ? a : b )
			maxLength = cliName + ' ' + maxLength
			maxLength = maxLength.length + 1

			res += Object.keys( data )[0] != key ? this.utils.text.blankLine : ''
			res += this.utils.text.infoBg( ` ${optGroup} ` )
			res += this.utils.text.blankLine
			
			Object.keys( data[key] ).forEach( value => {
				
				optName = cliName + ' ' + value
				optDesc = data[key][value]

				res += optName.padEnd( maxLength, ' ' ) + this.utils.text.info( ' - ' + optDesc )
				res += this.utils.text.blankLine

			} )
		
		} )

		return res
	
	}

	#usageTxt( cliName ){

		let title, desc, data

		title = 'CLI usage'
		data  = {
			'Commands' : {
				'[ test | t ]' : 'Lorem ipsum dolor sit amet',
			},
			'Flags' : {
				'[ -h | --help ]'    : 'Show CLI help information.',
				'[ -v | --version ]' : 'Show CLI version.',
			},
		}

		desc = this.#usageDescTxt( data, cliName )

		return this.#groupStyle( title, desc )

	}

	#cmdsListTxt( cmdList ){

		let title, desc

		title = 'Command list'
		desc  = cmdList
		
		return this.#groupStyle( title, desc )

	}
	
	#versionTxt( v ){
	
		return this.#txtStyle( 'Version', v )
	
	}

	run(){

		let res, cliName, version
		
		cliName = this.args.cli

		version = this.args.version

		res  = this.#infoTxt( cliName )
		res += this.#usageTxt( cliName )
		res += this.#versionTxt( version )

		return res
	
	}

}
