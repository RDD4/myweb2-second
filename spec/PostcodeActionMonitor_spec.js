'use strict';
const PostcodeActionMonitor = require('../actions/PostcodeActionMonitor');
describe("postcode", ()=> {
    let postcodeActionMonitor;
    beforeEach(()=> {
        postcodeActionMonitor = new PostcodeActionMonitor();
    });
    it(`should print Welcome
    1 - postcode
    2 - barcode
    3 - quit`.trim(), ()=> {
        let cmd = "q";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        postcodeActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(outputAndExit).toHaveBeenCalledWith(`Welcome
        1 - postcode
        2 - barcode
        3 - quit`.trim());
    });
});

