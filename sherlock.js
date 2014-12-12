#!/usr/bin/env node

var sherlock = require('commander'),
    server = require('./bin/server')
    pkg = require('./package.json');

sherlock
    .version(pkg.version)
    .option('-p, --port <port>', 'Port to be listen to, defaults to 7890', parseInt)
    .option('-p, --host <host>', 'Bind to host, defaults to localhost')
    .parse(process.argv);

server(sherlock.port || 7890, sherlock.host || 'localhost');