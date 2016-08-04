'use strict';
const repl = require('repl');

const Router = require('./router/Router');
const Shell = require('./shell/Shell');
const InitActionMonitor = require('./InitActionMonitor');
const BarcodeActionMonitor = require('./BarcodeActionMonitor');
const PostcodeActionMonitor = require('./PostcodeActionMonitor');

let actions = [
    new InitActionMonitor(),
    new BarcodeActionMonitor(),
    new PostcodeActionMonitor()
];
const router = new Router(actions);
const shell = new Shell(router, repl);
shell.start();
