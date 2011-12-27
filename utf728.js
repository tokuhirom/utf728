var Iconv = require('iconv').Iconv,
    rl = require('readline'),
    util = require('util'),
    undefined;

function MyApp() {
    this.utf827 = new Iconv('UTF-8', 'UTF-7');
    this.utf728 = new Iconv('UTF-7', 'UTF-8');
}
MyApp.prototype = {
    run: function () {
        var self = this;

        var rli = rl.createInterface(process.stdin, process.stdout);

        rli.setPrompt('utf7> ');

        rli.on('line', function(cmd) {
            var e = self.convert(cmd);
            util.puts(e);

            rli.prompt();
        }).on('close', function () {
            util.puts('');
            process.stdin.destroy();
        });

        rli.prompt();
    },
    convert: function (str) {
        if (str.match(/^\+/)) {
            console.log("7");
            return this.utf728.convert(str);
        } else {
            return this.utf827.convert(str);
        }
    }
};

(new MyApp()).run();

