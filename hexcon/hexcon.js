#!/usr/bin/env node

// const colors = require('colors');
const chalk = require('chalk');


const HEX = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

var FRAME3 = ["─", "│", "┌", "┐", "└", "┘", "┬", "┤", "┴", "├", "┼"];
var FRAME = [chalk.gray('─'),
                chalk.gray('│'),
                chalk.gray('┌'),
                chalk.gray('┐'),
                chalk.gray('└'),
                chalk.gray('┘'),
                chalk.gray('┬'),
                chalk.gray('┤'),
                chalk.gray('┴'),
                chalk.gray('├'),
                chalk.gray('┼')];


var index = 1;

var Hexcon = {
    numLength: 0,
    header: [chalk.yellow('id'), chalk.cyan('Decimal'), chalk.cyan('Hexa'), chalk.cyan('Octal'), chalk.cyan('Binary')],
    headerMinLength: [2, 7, 4, 5, 6],
    columnMaxWidth: [2, 7, 4, 5, 6],
    data: [],
    deal: function (numbers, hexaMode) {
        var self = this;
        self.numLength = numbers.length;

        self.data.push(self.header);

        if (hexaMode) {
            for (let j = 0; j < self.numLength; j++) {
                numbers[j] = parseInt(numbers[j], 16).toString();
            }
        }
        for (let i = 0; i < self.numLength; i++) {
            let arr = [];

            arr.push(index++);
            arr.push(numbers[i]);
            arr.push('0x' + parseInt(numbers[i]).toString(16));
            arr.push('0' + parseInt(numbers[i]).toString(8));
            arr.push(parseInt(numbers[i]).toString(2));

            self.data.push(arr);
        }

        self.getMaxSizeOfColumn();
        // console.log(self.columnMaxWidth);
        // console.log(self.data)

        self.print();
    },
    print: function () {
        let self = this;
        let row = '';

        /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ *
         * Top boundary of the frame
         * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
        row += FRAME[2];
        for (let i = 0; i < self.header.length; i++) {

            for (let j = 0; j < self.columnMaxWidth[i] + 2; j++) {
                row += FRAME[0];
            }

            if (i < self.header.length - 1)
                row += FRAME[6];
        }
        row += FRAME[3];
        console.log(row);

            /* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ *
             * content body
             * ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */
            row = '';
            for (let i = 0; i < self.data.length; i++) {

                row += FRAME[1];
                for (let j = 0; j < self.header.length; j++) {
                    let str = self.data[i][j];

                    let len = (self.columnMaxWidth[j] - (i == 0 ? self.headerMinLength[j] : str.toString().length));
                    for (let k = 0; k < len; k++) {
                        str += ' ';
                    }

                    row += ` ${str} ${FRAME[1]}`;
                }
                console.log(row);
                row = '';

                if (i < self.data.length - 1) {
                    row += FRAME[9];
                }else {
                    row += FRAME[4];
                }

                // 一排
                for (let j = 0; j < self.header.length; j++) {
                    for (let k = 0; k < self.columnMaxWidth[j] + 2; k++) {
                        row += FRAME[0];
                    }

                    // 4种结尾
                    if (i < self.data.length - 1) {
                        if (j < self.data.length - 1) {
                            row += FRAME[10];
                        }else {
                            row += FRAME[7];
                        }
                    }else {
                        if (j < self.data.length - 1) {
                            row += FRAME[8];
                        }else {
                            row += FRAME[5];
                        }
                    }

                }


                console.log(row);
                row = '';

            }
    },
    dealDecimal: function (digit, divider) {
        let num = parseInt(digit);
        if (num == NaN) {
            console.log(chalk.red('ParseInt error, please input a valid number!'));
        }

        let res = [];

        console.log(num)
        while (num > 0) {
            let reminder = num % divider;

            res.unshift(HEX[reminder]);
            num = Math.floor(num / divider);
        }

        return res.join('');
    },
    getMaxSizeOfColumn: function () {
        var self = this;
        self.data.map(function (item, index) {
            for (let i = 0; i < item.length; i++) {

                if (0 == index) {continue;}

                if (item[i].toString().length > self.columnMaxWidth[i]) {
                    self.columnMaxWidth[i] = item[i].toString().length;
                }
            }
        });

        return self.columnMaxWidth;
    }
}

module.exports = Hexcon;
