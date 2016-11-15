const chalk = require('chalk');

var Hanggi = {
    print: function () {
        console.log(chalk.cyan(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`));
        console.log(chalk.yellow(`          ___   __                                                         `));
        console.log(chalk.yellow(`         /  /\\ /  /\\                                             ___       `));
        console.log(chalk.yellow(`        /  / //  / /                                            /__/\\      `));
        console.log(chalk.yellow(`       /  /_//  / /______     ______     ______     ______     _\\__\\/      `));
        console.log(chalk.yellow(`      /  ___   / //  _   \\   /  _   \\   /  _   \\   /  _   \\   /  /\\        `));
        console.log(chalk.yellow(`     /  / //  / //  / /  /\\ /  / /  /\\ /  / /  /\\ /  / /  /\\ /  / /        `));
        console.log(chalk.yellow(`    /  / //  / //  /_/  / //  / /  / //  /_/  / //  /_/  / //  / /         `));
        console.log(chalk.yellow(`   /__/ //  / / \\___/|_/ //__/ /__/ / \\___   / / \\___   / //__/ /          `));
        console.log(chalk.yellow(`   \\__\\/ \\__\\/   \\__\\\\_\\/ \\__\\/\\__\\/ _ \\ /  / / __\\ /  / / \\__\\/           `));
        console.log(chalk.yellow(`                                    / /_/  / / / /_/  / /                  `));
        console.log(chalk.yellow(`                                    \\_____/ /  \\_____/ /                   `));
        console.log(chalk.yellow(`                                     \\____\\/    \\____\\/                    `));
        console.log(chalk.yellow(`                                                                           `));
        console.log(chalk.cyan(`■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■`));
    }
}

module.exports = Hanggi
