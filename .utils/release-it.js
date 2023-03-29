/**
 * Release-it config builder.
 *
 * @description Configuration for release versions in github.
 *
 * @see https://github.com/release-it/release-it/blob/main/docs/configuration.md
 */
import { writeFile } from 'fs/promises'
import { join }      from 'path'
import { pkgs }      from './getPkgs.js'

// console.log( pkgs )

const pkgData       = pkgs.data.workspace
const releaseItFile = join( pkgs.dir.workspace, '.release-it.json' )
const topics        = pkgData.keywords.join( ',' )
const data          = {
	'git' : {
		'requireBranch' : 'main',
		'commitMessage' : `Release v${pkgData.version}`,
	},
	'hooks' : {
		'before:init' : [ 
			'git push', 
			// 'pnpm lint-fix', 
			// 'pnpm build', 
		],
	    'after:bump'        : 'pnpm auto-changelog -p',
	    'after:git:release' : 'echo \'After git push, before github release\'',
	    'after:release'     : [
	    	`gh repo edit ${pkgData.repository.url} -d \"${pkgData.description}\"`,
	    	`gh repo edit ${pkgData.repository.url} --add-topic ${topics}`,
	    	`echo \'Github action is now releasing: ${pkgData.name} v${pkgData.version} to ${pkgData.repository.url}.\n Check if all is ok 🌈🤖\n ${pkgData.repository.url}/actions\'`,
	    ],
	},
	'github' : {
		'release' : false,
	},
	'npm' : {
		'release' : false,
	},
}

const JsonData = JSON.stringify( data, null, 4 )

await writeFile( releaseItFile, JsonData, 'utf-8' )
