import { Logger, transports } from 'winston';
export var logger = new Logger({
  transports: [
    new transports.Console()
  ]
});
