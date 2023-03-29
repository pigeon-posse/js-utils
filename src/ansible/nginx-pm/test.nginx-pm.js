import https from 'https'

/* eslint-disable camelcase */
const token                   = ''
const hostname                = ''
const cloudflareToken         = ''
const letsencryptEmail        = ''
const certificatesDomainNames = []

const dataFunct = ( data, hostName, path, token, method = 'POST' ) => {

	let res 

	res = {
		data    : data,
		options : {
			hostname : hostName,
			path     : path,
			method   : method,
			headers  : {
				// API Key for nginxproxy manager authentication
				'Authorization' : `Bearer ${token}`,
				'Accept'        : 'application/json',
				'Content-Type'  : 'application/json',
			},
		},
	}

	if ( method == 'POST' ) res.options.headers['Content-Length'] = Buffer.byteLength( JSON.stringify( res.data ) )
	
	return res

}

const makePOSTReq = ( args ) => {

	const req = https.request( args.options, res => {

		console.log( `statusCode: ${res.statusCode}` )

		let data = ''
		res.on( 'data', chunk => {

			data += chunk
	
		} )

		res.on( 'end', () => {

			console.log( JSON.parse( data ) )
	
		} )

	} )

	req.on( 'error', error => {

		console.error( error )

	} )

	// Write the request body data to the request
	req.write( JSON.stringify( args.data ) )

	req.end()

}

const makeGETReq = ( args ) => {

	const req = https.request( args.options, res => {

		console.log( `statusCode: ${res.statusCode}` )

		res.on( 'data', d => process.stdout.write( d ) ) 

	} )

	req.on( 'error', error => console.error( error ) )

	req.end()

}

const hostsPOST = dataFunct(
	{
		domain_names    : [ 'test.admin.example.com' ],
		forward_host    : 'test_app',
		forward_port    : 80,
		access_list_id  : 0,
		certificate_id  : 1,
		ssl_forced      : 1,
		caching_enabled : 0,
		block_exploits  : 0,
		// advanced_config : '',
		meta            : {
			letsencrypt_agree : false,
			dns_challenge     : false,
			nginx_online      : true,
			nginx_err         : null,
		},
		allow_websocket_upgrade : 0,
		http2_support           : 1,
		forward_scheme          : 'http',
		enabled                 : 1,
		locations               : [],
		hsts_enabled            : 1,
		hsts_subdomains         : 0,
	},
	hostname,
	'/api/nginx/proxy-hosts',
	token,
	'POST',
)

const hostsGET = dataFunct(
	'',
	hostname,
	'/api/nginx/proxy-hosts',
	token,
	'GET',
)

const certsGET = dataFunct(
	{
		'provider'     : 'letsencrypt',
		'nice_name'    : certificatesDomainNames.toString(),
		'domain_names' : certificatesDomainNames,
		'meta'         : {
			'letsencrypt_email'        : letsencryptEmail,
			'dns_challenge'            : true,
			'dns_provider'             : 'cloudflare',
			'dns_provider_credentials' : `# Cloudflare API token\r\ndns_cloudflare_api_token = ${cloudflareToken}`,
			'letsencrypt_agree'        : true,
		},
	},
	hostname,
	'/api/nginx/certificates',
	token,
	'GET',
)

const certsPOST = dataFunct(
	{
		'provider'     : 'letsencrypt',
		'nice_name'    : certificatesDomainNames.toString(),
		'domain_names' : certificatesDomainNames,
		'meta'         : {
			'letsencrypt_email'        : letsencryptEmail,
			'dns_challenge'            : true,
			'dns_provider'             : 'cloudflare',
			'dns_provider_credentials' : `# Cloudflare API token\r\ndns_cloudflare_api_token = ${cloudflareToken}`,
			'letsencrypt_agree'        : true,
		},
	},
	hostname,
	'/api/nginx/certificates',
	token,
	'POST',
)

console.log( 'hostsPOST: ',hostsPOST )
console.log( 'hostsGET: ', hostsGET )
console.log( 'certsPOST: ', certsPOST )
console.log( 'certsGET: ', certsGET )

// makePOSTReq( hostsPOST )
// makeGETReq( certsGET )


