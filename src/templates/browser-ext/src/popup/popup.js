/**
 * Options.
 *
 * @description TODO.
 *
 * @see firefox: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups
 * 		chromium: https://developer.chrome.com/docs/extensions/reference/browserAction/
 */

const html = () => {
	
	let footer, footerEl, header, headerEl, content, contentEl

	header  = document.querySelector( '.header' )
	content = document.querySelector( '.content' )
	footer  = document.querySelector( '.footer' )

	headerEl             = document.createElement( 'h1' )
	headerEl.textContent = '{{pp_template_name}}'

	contentEl             = document.createElement( 'p' )
	contentEl.textContent = 'Lorem ipsum'

	footerEl             = document.createElement( 'span' )
	footerEl.textContent = 'Copyright © ' + new Date().getFullYear()

	header.appendChild( headerEl )
	content.appendChild( contentEl )
	footer.appendChild( footerEl )

}

const init = async () => {

	html()
	// Do something

}

init()
