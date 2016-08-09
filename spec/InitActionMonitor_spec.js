'use strict';
const InitActionMonitor = require('../actions/InitActionMonitor');
const Router = require('../router/Router');
describe("init", ()=> {
    let initActionMonitor;
    beforeEach(()=> {
        initActionMonitor = new InitActionMonitor();
    });

    it("should print Please input postcode(Input q exit) if user input 1", ()=> {
        let cmd = "1";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        initActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(outputAndExit).toHaveBeenCalledWith("Please input postcode(Input q exit):");
    });
    it("should print Please input barcode(Input q exit) if user input 2",()=> {
        let cmd = "2";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        initActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(outputAndExit).toHaveBeenCalledWith("Please input barcode(Input q exit):");
    });
    it("should exit process if user input 3",()=> {
        let cmd = "3";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        spyOn(process,"exit");
        initActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(process.exit).toHaveBeenCalled();
    });
    it("should print input error if user input 3",()=> {
        let cmd = "5";
        let outputAndExit = jasmine.createSpy("spy");
        let currentActionName = jasmine.createSpy("spy");
        initActionMonitor.doAction(cmd, outputAndExit, currentActionName);
        expect(outputAndExit).toHaveBeenCalledWith("Input error!");
    });
});


