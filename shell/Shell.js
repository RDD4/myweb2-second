'use strict';
class Shell {
    constructor(router, repl) {
        this.router = router;
        this.repl = repl;
    }
    start() {
        console.log(`
        Welcome
        1 - postcode
        2 - barcode
        3 - quit`.trim());
        this.repl.start({
            prompt: '>', eval: (cmd, context, filename, callback) => {
                this.router.handle(cmd.trim(), function (text) {
                    callback(null, text);
                });
            }

        });
    }
}

module.exports = Shell;