import fs = require('fs');
import process = require('process');

function loadFile(filename:string):Promise<any>{
  return new Promise((resolve:string, reject:string)=>{
      fs.readFile(filename,(err:string, result:string) => {
          if (err){
            reject(err);
          } else {
            resolve(result);
          }
      });
  })
}

function init(filename:string){
  filename = filename || './app/config.json';
  return loadFile(filename).then((result)=>{
    var config:any = JSON.parse(result);
    config.twitter = {
      consumer_key: process.env.TW_CONSUMER_KEY,
      consumer_secret: process.env.TW_CONSUMER_SECRET,
      access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET 
    };
    return config;
   }).catch((err:string)=>{
     console.log(err);
   });
}

export var json = init();