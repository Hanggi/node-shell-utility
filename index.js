#!/usr/bin/env node

const program = require('commander');
const os = require('os');

const hexcon = require('./hexcon/hexcon');
const chalk = require('chalk');
const showChalk = require('./chalk');
const showIp = require('./ip');
const hanggi = require('./hanggi');



// console.log(process.version);
// console.log(``);

program
    .version('0.0.1')
    .option('-h, --help', 'This is a help.')
    .option('-t, --test', 'This is a test string.')
    // .parse(process.argv)



program
    .command('hexcon [numbers...]')
    .description('input a series of numbers')
    .option('-x, --hexa', 'input a hexa number.')
    .action(function (numbers, options) {

        var hexaMode = options.hexa;

        if (numbers.length > 0) {
            hexcon.deal(numbers, hexaMode);
        }

    })


program
    .command('ip')
    .description('show ip')
    .action(function () {
        showIp.show();
    })

program
    .command('cpus')
    .description('show cpus')
    .action(function () {
        console.log(os.cpus())
    })

program
    .command('hanggi')
    .description('show ip')
    .action(function () {
        hanggi.print();
    })


program
    .command('chalk')
    .description('Show the chalk color list.')
    .action(function () {
        showChalk.show();
    })
    .parse(process.argv)


    program.parse(process.argv);
