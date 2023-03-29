/**
 * mergeObject.
 *
 * @description File for set all functions.
 *
 * @version 1.0.0
 * @since 1.1.0
 */
const { exec } = require("child_process");

const childProcess = (cmd, argvNum = 2) => {
	
	Object.entries(cmd).forEach( ([key, value]) => {
		
		if (process.argv[argvNum] == key) {

			exec( value, (error, stdout, stderr) => {
			    if (error) {
			        console.log(`error: ${error.message}`);
			        return;
			    }
			    if (stderr) {
			        console.log(`stderr: ${stderr}`);
			        return;
			    }
			    console.log(`stdout: ${stdout}`);
			});

		}

	})
}

module.exports = childProcess