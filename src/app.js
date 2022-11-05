#!/usr/bin/env node
const {program} = require('commander');

program.version("0.0.1");

program
    .option('-a, --add','add a bookmark')
    .parse()

console.log(program.opts());