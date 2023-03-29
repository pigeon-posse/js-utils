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
import txt     from '../core/_dataTxt'
import iconURL from '../assets/images/app-icon.png'

const content = document.querySelector( '.content' )

content.innerHTML = `
	<div class="title">
		<img src="${iconURL}" width="50px" alt="logo">
		<h2>Preferences</h2>
	</div>
	<div class="info">
		<div class="info-container">
			<div>🗒 Activate copies in Notes</div>
			<label class="switch" id="notes">
			  <input type="checkbox" checked>
			  <span class="slider round"></span>
			</label>
		</div>
		<div class="info-container">
			<div>📂 Activate copies in Finder</div>
			<label class="switch" id="finder">
			  <input type="checkbox" checked>
			  <span class="slider round"></span>
			</label>
		</div>
	</div>
	<div class="footer">
		<p class="copy">${txt.copyrightMsg}</p>
	</div> 
`
