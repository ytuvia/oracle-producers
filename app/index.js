"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("./configurator");
config.json.then(function (cnf) {
    console.log(cnf);
});
