import { fs } from 'fs';

public class Config {
  json: string;
  constructor(filename: string): Promise<any>{
    return new Promise((resolve, reject)=>{
      filename = filename || './app/config.json';
      fs.readFile(filename,(err, result) => {
          if (err) reject(err);
          else {
            let config = JSON.parse(result);
            config.twitter = {
              consumer_key: process.env.TW_CONSUMER_KEY,
              consumer_secret: process.env.TW_CONSUMER_SECRET,
              access_token_key: process.env.TW_ACCESS_TOKEN_KEY,
              access_token_secret: process.env.TW_ACCESS_TOKEN_SECRET 
            }
            this.json = config;
            resolve(config);
          }
      });
    })
  };
}

async function init(filename: string){
  let config = await new Config(filename);
  return config.json;
}

export var config = init;