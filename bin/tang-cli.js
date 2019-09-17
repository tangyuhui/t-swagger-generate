#!/usr/bin/env node
const program = require('commander');
const apiGenerateCli = require('../script/index');
program
.command('view')
.option('-p, --port <port>', 'Port used for the View server')
.description('打开swagger-ui')
.action(function(cmdObj){
    apiGenerateCli.run(cmdObj.port);
});

 
program.parse(process.argv);