const fs = require('fs');

module.exports = function(){
	
	if(fs.existsSync(__dirname + "/../../electron-edge-js")){
		console.log("Found electron-edge-js!\n");
		makeEnv(true);
	}
	else{
		console.warn("\nelectron-edge not found. Trying to find edge.js\n")

		if(fs.existsSync(__dirname + "/../../edge-js")){
			console.log("Found edge!\n");
			makeEnv(false);
		}
		
		else{
			console.error("edge-js not found\n");
			process.exit(1);
		}
	}

}

function makeEnv(electron){
	fs.writeFileSync(fs.realpathSync(__dirname + '\\..') + "\\.env", electron ? "ELECTRON=true" : "ELECTRON=false");
}