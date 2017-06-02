import config = require('./config');
import process = require('process');
import Twitter = require('twitter');

function listen(){
	var client:Twitter = new Twitter({
		consumer_key: process.env.TW_CONSUMER_KEY,
		consumer_secret: process.env.TW_CONSUMER_SECRET,
		access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET 
	});
}