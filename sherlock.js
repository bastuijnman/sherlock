#!/usr/bin/env node

var sherlock = require('commander'),
    server = require('./src/server/server')
    pkg = require('./package.json');

sherlock
    .version(pkg.version)
    .option('-p, --port <port>', 'Port to be listen to, defaults to 7890', parseInt)
    .parse(process.argv);

server(sherlock.port || 7890);