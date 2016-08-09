'use strict';
const BarcodeActionMonitor = require('../actions/BarcodeActionMonitor');
describe("barcode", ()=> {
    let barcodeActionMonitor;
    beforeEach(()=> {
        barcodeActionMonitor = new BarcodeActionMonitor();
    });
    it(`should print Welcome
    1 - postcode
    2 - barcode
    3 - quit`.trim(), ()=> {
        let cmd = "q";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        barcodeActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(outputAndExit).toHaveBeenCalledWith(`Welcome
        1 - postcode
        2 - barcode
        3 - quit`.trim());
    });

});
