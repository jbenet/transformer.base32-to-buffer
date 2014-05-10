#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  ['c9jpaw10c9qpyw0', new Buffer('beep boop', 'ascii')]
])
