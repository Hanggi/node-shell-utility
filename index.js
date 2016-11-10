#!/usr/bin/env node

const program = require('commander');
const hexcon = require('./hexcon/hexcon');

console.log(process.version)

program
    .version('0.0.1')
    .option('-h, --help', 'This is a help.')
    .option('-t, --test', 'This is a test string.')


program
    .command('hexcon [numbers...]')
    .description('input a series of numbers')
    .action(function (numbers) {
        // console.log(numbers)
        hexcon.deal(numbers);
    })


program.parse(process.argv);
