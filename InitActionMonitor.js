'use strict';
class InitActionMonitor {
    constructor() {
        this.name = 'init';
    }
    doAction(cmd,outputAndExit,currentActionName) {
        switch (cmd) {
            case'1':
                outputAndExit("Please input postcode(Input q exit):");
                currentActionName.value =  "postcode";
                break;
            case'2':
                outputAndExit("Please input barcode(Input q exit):")
                currentActionName.value =  'barcode';
                break;
            case'3':
                process.exit(0);
                break;
            default:
                outputAndExit( 'Input error!');
        }
    }
}

module.exports = InitActionMonitor;