#!/usr/bin/env node

const program = require('commander');
const hexcon = require('./hexcon/hexcon');

// console.log(process.version);

program
    .version('0.0.1')
    .option('-h, --help', 'This is a help.')
    .option('-t, --test', 'This is a test string.')
    .parse(process.argv)



program
    .command('hexcon [numbers...]')
    .description('input a series of numbers')
    .option('-x, --hexa', 'input a hexa number.')
    .action(function (numbers, options) {

        var hexaMode = options.hexa;

        hexcon.deal(numbers, hexaMode);
    })


program.parse(process.argv);


console.log('test');
