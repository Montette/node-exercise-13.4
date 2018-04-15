var OSinfo = require('../modules/OSinfo');

var time = require('../modules/time');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();

        var reg = /^[\d]*[\s]sekund$|^[\d]*[\s]seconds$|^[\d]*[\s]sekundy$/gi;
        if (reg.test(instruction)) {
            time.print(instruction);

        }else{
            switch (instruction) {
                case '/node version':
                    process.stdout.write(process.versions.node + '\n');
                    break;
                case '/operating system':
                    process.stdout.write(process.env.OS + '\n');
                    break;
                case '/computer name':
                    process.stdout.write(process.env.COMPUTERNAME + '\n');
                    break;
                case '/exit':
                    process.stdout.write('Quitting app!\n');
                    process.exit();
                    break;
                case '/sayhello':
                    process.stdout.write('hello!\n');
                    break;
                case '/getOSinfo':
                    OSinfo.print();
                    break;
                default:
                    process.stderr.write('Wrong instruction!\n');
            }

        }
    }
})
