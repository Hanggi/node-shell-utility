
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
                        console.log(chalk.cyan(`External_IP: ${bb.ip}`));
                        console.log(chalk.cyan(`City: ${bb.city}`));
                        console.log(chalk.cyan(`Country: ${bb.country}`));
                        console.log(chalk.cyan(`Org: ${bb.org}`));
                    }
                }
            });
    },
    show: function () {
        let self = this;

        console.log(chalk.yellow(`Hostname: ${self.hostname}`));
        console.log(chalk.cyan(`IP: ${self.ip_v4}`));

        self.external_ip();
    }
}


module.exports = Ip
