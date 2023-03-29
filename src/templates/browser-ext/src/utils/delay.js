/**
 * Delay function.
 *
 * @description Delay function.
 */

// eslint-disable-next-line promise/param-names
export const delay = ms => new Promise( res => setTimeout( res, ms ) )
