"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var Twitter = require("twitter");
function listen() {
    var client = new Twitter({
        consumer_key: process.env.TW_CONSUMER_KEY,
        consumer_secret: process.env.TW_CONSUMER_SECRET,
        access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET
    });
}
