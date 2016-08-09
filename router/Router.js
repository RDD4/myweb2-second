'use strict';
class Router {
    constructor(actions) {
        this.currentActionName =
        {value: 'init'};
        this.actions = actions;
    }

    handle(cmd, outputAndExit) {
        //find返回一个对象给action
        let action = this.actions.find(v => v.name === this.currentActionName.value);
        action.doAction(cmd, outputAndExit, this.currentActionName);
    }
}

module.exports = Router;