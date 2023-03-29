/**
 * To-do.
 *
 * @description To-do.
 *
 * @since 1.0.0
 * @version 1.0.0
 */

import { app, nativeImage } from 'electron' 
import { join }            from 'path'
import * as utils          from '../utils/_main'
import dataTxt             from './_dataTxt'
import { custom, funding } from '../../package.json'

process.env.DIST    = join( __dirname, '../' + custom.projectPath.dist.buildToProject + custom.projectPath.dist.own )
const resourcesPath = join( process.resourcesPath, custom.projectPath.dist.resourcesSubFolder )
const imagesPath    = app.isPackaged ? resourcesPath : join( process.env.DIST, custom.projectPath.dist.ownToProject + custom.projectPath.source.images )
const icon          = join( imagesPath, 'icon.png' )
const menuIconT     = join( imagesPath, 'iconTemplate.png' )

export default {
	version      : app.getVersion(),
	name         : app.getName(),
	dockIcon     : nativeImage.createFromPath( icon ),
	appIcon      : nativeImage.createFromPath( icon ),
	iconTemplate : nativeImage.createFromPath( menuIconT ),
	donateUrl    : funding.url,
	txt          : dataTxt,
	utils        : utils,
	isDev        : process.env.VITE_DEV_SERVER_URL,
}

