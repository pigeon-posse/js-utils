/**
 * Content.
 *
 * @description TODO.
 *
 * @see Firefox: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
 * 		Chromium: https://developer.chrome.com/docs/extensions/mv3/content_scripts/
 */

import { core }   from '../core/main'
import * as utils from '../utils/main'

const init = async () => {

	core( utils )

}

init()
