/**
 * RENDERED FILE.
 *
 * @description
 *  This file is loaded via the <script> tag in the index.html file and will
 *  be executed in the renderer process for that window. No Node.js APIs are
 *  available in this process because `nodeIntegration` is turned off and
 *  `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 *  to expose Node.js functionality from the main process.
 */
import '../assets/scss/_main.scss'
// import orgLogoURL from '../assets/images/pigeonposse-logo.png'

import txt      from '../core/_dataTxt'
import * as pkg from '../../package.json'
import iconURL  from '../assets/images/app-icon.png'

const content = document.querySelector( '.content' )

const authorsHtml = ( authors ) => {

	if ( Array.isArray( authors ) ) {

		let res 

		res  = '<div class="info-container">'
		res += '<div>✍️ Authors</div>'
		res += '<div>'
		for ( let i = authors.length - 1; i >= 0; i-- ) {

			res += '<a href="mailto:' + authors[i].email + '">'
			res += authors[i].name
			res += '</a>'
		
		}
		res += '</div>'
		res += '</div>'
		return res
	
	}

	return ''

}

content.innerHTML = `
	<div class="title">
		<img src="${iconURL}" width="30px" alt="logo">
		<h2>About</h2>
	</div>
	<div class="info">
		<div class="info-container">
			<div>🔢 Version</div>
			<div>
				<span target="_blank">
					${pkg.version}
				</span>
			</div>
		</div>
		${authorsHtml( pkg.contributors )}
		<div class="info-container">
			<div>🐦 Collective</div>
			<div>
				<a href="mailto:${pkg.custom.collective.email}">
					${pkg.custom.collective.name}
				</a>
			</div>
		</div>
	</div>
	<div class="footer">
		<p class="copy">${txt.copyrightMsg}</p>
	</div> 
`

