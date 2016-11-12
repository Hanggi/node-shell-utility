
const chalk = require('chalk');

const arrModifiers = [
    {
        name: 'reset',
        color: chalk.reset('reset')
    },
    {
        name: 'bold',
        color: chalk.bold('bold')
    },
    {
        name: 'dim',
        color: chalk.dim('dim')
    },
    {
        name: 'italic',
        color: chalk.italic('italic'),
    },
    {
        name: 'unerline',
        color: chalk.underline('unerline')
    },
    {
        name: 'inverse',
        color: chalk.inverse('inverse')
    },
    {
        name: 'hidden',
        color: chalk.hidden('hidden')
    },
    {
        name: 'strikethrough',
        color: chalk.strikethrough('strikethrough')
    }
]
const arrModifiers2 = [chalk.reset('reset'), chalk.bold('bold'), chalk.dim('dim'), chalk.italic('italic'), chalk.underline('unerline'), chalk.inverse('inverse'), chalk.hidden('hidden'), chalk.strikethrough('strikethrough')]

const arrColors = [
    {
        name: 'black',
        color: chalk.black('black')
    },
    {
        name: 'red',
        color: chalk.red('red')
    },
    {
        name: 'green',
        color: chalk.green('green')
    },
    {
        name: 'yellow',
        color: chalk.yellow('yellow'),
    },
    {
        name: 'blue',
        color: chalk.blue('blue')
    },
    {
        name: 'magenta',
        color: chalk.magenta('magenta')
    },
    {
        name: 'cyan',
        color: chalk.cyan('cyan')
    },
    {
        name: 'white',
        color: chalk.white('white')
    },
    {
        name: 'gray',
        color: chalk.gray('gray')
    }
]

const arrColors2 = [chalk.black('black'), chalk.red('red'), chalk.green('green'), chalk.yellow('yellow'), chalk.blue('blue'), chalk.magenta('magenta'), chalk.cyan('cyan'), chalk.white('white'), chalk.gray('gray')]

const arrBgColors = [
    {
        name: 'bgBlack',
        color: chalk.bgBlack('bgBlack')
    },
    {
        name: 'bgRed',
        color: chalk.bgRed('bgRed')
    },
    {
        name: 'bgGreen',
        color: chalk.bgGreen('bgGreen')
    },
    {
        name: 'bgYellow',
        color: chalk.bgYellow('bgYellow'),
    },
    {
        name: 'bgBlue',
        color: chalk.bgBlue('bgBlue')
    },
    {
        name: 'bgMagenta',
        color: chalk.bgMagenta('bgMagenta')
    },
    {
        name: 'bgCyan',
        color: chalk.bgCyan('bgCyan')
    },
    {
        name: 'bgWhite',
        color: chalk.bgWhite('bgWhite')
    }
]

const arrBgColors2 = [chalk.bgBlack('bgBlack'), chalk.bgRed('bgRed'), chalk.bgGreen('bgGreen'), chalk.bgYellow('bgYellow'), chalk.bgBlue('bgBlue'), chalk.bgMagenta('bgMagenta'), chalk.bgCyan('bgCyan'), chalk.bgWhite('bgWhite')]

var Color = {
    padding: 24,
    show: function () {
        let self = this;
        let arr = [];

        for (let i = 0; i < 9; i++) {
            let str = '';
            if (arrModifiers[i]) {
                str = arrModifiers[i].color + self.getPadding(arrModifiers[i].name, self.padding);
            }
            str += arrColors[i].color + self.getPadding(arrColors[i].name, self.padding);
            if (arrBgColors[i]) {
                str += arrBgColors[i].color;
            }
            arr.push(str);
        }

        for (let j = 0; j < 9; j++) {
            console.log(arr[j]);
        }
    },
    getPadding: function (str, padding, v) {
        let self = this;

        let pad = '';
        if (str) {

            for (let i = 0; i < self.padding - str.length; i++) {
                pad += ' ';
            }
        }else {
            for (let i = 0; i < self.padding; i++) {
                pad += ' ';
            }
        }

        // console.log(str.length)
        return pad;
    }
}


module.exports = Color;
