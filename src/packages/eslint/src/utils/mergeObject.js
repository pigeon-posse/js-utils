/**
 * mergeObject.
 *
 * @description File for set all functions.
 *
 * @version 1.0.0
 * @since 1.1.0
 */

/**
 * Merge objects.
 *
 * @description                  Performs a deep merge of objects and returns new object. Does not modify
 *                               objects (immutable) and merges arrays via concatenation.
 *
 * @param       {...object} objs - Objects to merge.
 * @returns     {object}         - New object with merged key/values.
 */
function mergeObject( ...objs ) {

	const isObject = obj => obj && typeof obj === 'object'
  
	const res = objs.reduce( ( prev, obj ) => {

		Object.keys( obj ).forEach( key => {

			const pVal = prev[key]
			const oVal = obj[key]
      
			if ( Array.isArray( pVal ) && Array.isArray( oVal ) ) {

				prev[key] = pVal.concat( ...oVal )
			
			}
			else if ( isObject( pVal ) && isObject( oVal ) ) {

				prev[key] = mergeObject( pVal, oVal )
			
			}
			else {

				prev[key] = oVal
			
			}
		
		} )
    
		return prev
	
	}, {} )

	return res

}

/**
 * EXPORTS.
 */
module.exports = mergeObject
