#!/usr/bin/env node

// var program = require('commander');
//
// program
//     .version('0.0.1')
//     // .command('aaa [name]', 'abcdefg')
//     .command('*')
//     .action(function(env) {
//         console.log(`abcde : %s`, env);
//     });
//
// program.parse(process.argv);

const colors = require('colors');
const chalk = require('chalk');


const HEX[16]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};

var Hexcon = {
    numLength: 0,
    header: [chalk.yellow('id'), chalk.cyan('Decimal'), chalk.cyan('Hexa'), chalk.cyan('Octal'), chalk.cyan('Binary')],
    deal: function (numbers) {
        var self = this;
        self.numLength = numbers.length;

        console.log(`${numbers[0]} Length: ${self.numLength} type: ${typeof(numbers)}`);

        console.log(self.header[1])
        console.log(self.header[2])


    },
    dealDecimal: function (digit, divider) {
        
    },
    dtoh: function (digit) {
        var len = digit.lenght;

        for (let i = len - 1; i >= 0; i--) {

        }
    }

}

module.exports = Hexcon;
