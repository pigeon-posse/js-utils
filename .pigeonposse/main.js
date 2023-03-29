import * as utils from '../.utils/_main.js'

const monoPkg = utils.pkgs.data.workspace

const data = {
	web : {
		'DevEnv' : {
		    type        : 'mono-repo',
		    version     : monoPkg.version,
		    description : monoPkg.description,
		    name        : monoPkg.name,
		    logo        : 'https://github.com/pigeonposse/fake-admin/blob/main/plugin/src/assets/img/logo.png',
		    banner      : 'https://github.com/pigeonposse/fake-admin/blob/main/docs/banner.png',
		},
	},
}

export default data
