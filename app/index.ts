import config = require('./configurator')

config.json.then((cnf:any)=>{
	console.log(cnf);
});