'use strict';
const Barcode = require('../core/Barcode');
const barcode = new Barcode();
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
        this.help = `
    Please input barcode(Input q exit):`.trim();
    }

    doAction(cmd,outputAndExit) {
        if (cmd == 'q') {
            return 'init';
        }
        else if (barcode.transform(cmd) === undefined) {

            outputAndExit("This barcode is error!");
            return 'barcode';
        }
        else {

            outputAndExit('I\'m converting the barcode: ' + cmd + "\n" + 'This is the correct postcode: '
                + barcode.transform(cmd));
            return 'barcode';
        }

    }
}

module.exports = BarcodeAction;
