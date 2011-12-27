var Iconv = require('iconv').Iconv,
    rl = require('readline'),
    util = require('util'),
    undefined;

var utf827 = new Iconv('UTF-8', 'UTF-7');
var utf728 = new Iconv('UTF-7', 'UTF-8');
function convert(str) {
    if (str.match(/^\+/)) {
        console.log("7");
        return utf728.convert(str);
    } else {
        return utf827.convert(str);
    }
}

// setup readline
var rli = rl.createInterface(process.stdin, process.stdout);

rli.setPrompt('utf7> ');

rli.addListener('line', function(cmd) {
    var e = convert(cmd);
    util.puts(e);

    rli.prompt();
});

rli.addListener('close', function() {
    util.puts('');
    process.stdin.destroy();
});

rli.prompt();

