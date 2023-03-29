/**
 * Current date.
 *
 * @description Modules to control application life and create native browser window.
 */

export const currDate = () => {

	let today, dd, mm, yyyy

	today = new Date()
	dd    = String( today.getDate() ).padStart( 2, '0' )
	mm    = String( today.getMonth() + 1 ).padStart( 2, '0' )
	yyyy  = today.getFullYear()

	today = mm + '-' + dd + '-' + yyyy

	return today

}
