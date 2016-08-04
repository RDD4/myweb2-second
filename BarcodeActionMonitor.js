'use strict';
/*global require*/

let repl = require('repl');
let agent = require('superagent');

class BarcodeActionMonitor {
    constructor() {
        this.name = 'barcode';
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
                .get("http://localhost:3000/barcode")
                .query({code: cmd})
                .end(function (error, response) {
                    if (response.text === "undefined") {
                        outputAndExit("This barcode is error!"+"Please input barcode(Input q exit):");
                    } else {
                        outputAndExit('I\'m converting the barcode: ' + cmd + '\n'+'This is the correct postcode: ' + response.text);
                        outputAndExit(`Please input barcode(Input q exit):`.trim());
                    }
                });
            currentActionName.value = "barcode";

        }
    }
}
module.exports = BarcodeActionMonitor;