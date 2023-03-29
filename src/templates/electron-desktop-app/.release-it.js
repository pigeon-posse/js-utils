/**
 * Release-it config.
 *
 * @description Configuration for release versions in github.
 * @see https://github.com/release-it/release-it/blob/main/docs/configuration.md
 */

const pkg    = require( './package.json' )
const topics = pkg.keywords.join( ',' )

module.exports = {
	'git' : {
		'requireBranch' : 'main',
		'commitMessage' : 'Release v${version}',
	},
	'hooks' : {
		'before:init' : [ 
			'git push', 
			'pnpm lint-fix', 
			// 'pnpm build' 
		],
	    'after:bump'        : 'pnpm auto-changelog -p',
	    'after:git:release' : 'echo \'After git push, before github release\'',
	    'after:release'     : [
	    	`gh repo edit ${pkg.repository.url} -d \"${pkg.description}\"`,
	    	`gh repo edit ${pkg.repository.url} --add-topic ${topics}`,
	    	'echo \'Github action is now releasing: ${name} v${version} to ${repo.repository}.\n Check if all is ok 🌈🤖\n https://github.com/${repo.repository}/actions\'',
	    ],
	},
	'github' : {
		'release' : false,
		'assets'  : [
			`${pkg.custom.projectPath.dist.release}/${pkg.version}/${pkg.name}_${pkg.version}.dmg`,
		],
	},
	'npm' : {
		'release' : false,
	},
}
