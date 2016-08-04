'use strict';
/*global require*/

let repl = require('repl');
let agent = require('superagent');

class PostcodeActionMonitor {
    constructor() {
        this.name = 'postcode';
    }

    doAction(cmd, outputAndExit, currentActionName) {
        if (cmd === 'q') {
            outputAndExit(`Welcome
        1 - postcode
        2 - barcode
        3 - quit`.trim());
            currentActionName.value = "init";
        }
        else {
            agent
                .get("http://localhost:3000/postcode")
                .query({code: cmd})
                .end(function (error, response) {
                    if (response.text === '') {
                        outputAndExit("This postcode is error!"+"Please input postcode(Input q exit):");
                    } else {
                        outputAndExit('I\'m converting the postcode: ' + cmd + "\n"+
                            'This is the correct barcode: '+response.text);
                        outputAndExit("Please input postcode(Input q exit):");
                    }
                });

            currentActionName.value = "postcode";
        }
    }
}
module.exports = PostcodeActionMonitor;