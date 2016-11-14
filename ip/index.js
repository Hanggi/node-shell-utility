
const os = require('os');
const chalk = require('chalk');
const request = require('request');

var Ip = {
    ip_v4: os.networkInterfaces().en0[1].address,
    hostname: os.hostname(),
    external_ip: function () {
            request('http://ipinfo.io/json', function (err, res, body) {
                if (!err && res.statusCode == 200) {

                    let bb = JSON.parse(body);

                    if (body) {
                        console.log(chalk.green(`External_IP: ${bb.ip}`));
                        console.log(chalk.cyan(`City: ${bb.city}`));
                        console.log(chalk.cyan(`Region: ${bb.region}`));
                        console.log(chalk.cyan(`Country: ${bb.country}`));
                        console.log(chalk.magenta(`Org: ${bb.org}`));
                        console.log(chalk.blue(`Location: ${bb.loc}`));
                    }
                }
            });
    },
    show: function () {
        let self = this;

        console.log(chalk.yellow(`Hostname: ${self.hostname}`));
        console.log(chalk.green(`Internal_IP: ${self.ip_v4}`));

        self.external_ip();
    }
}


module.exports = Ip
