const chalk = require('chalk');

const success = chalk.bold.green.inverse;
const error = chalk.bold.red.inverse;
const warning = chalk.keyword('orange');
const info = chalk.bold.blue.inverse;

module.exports = {
    'success': success,
    'error': error,
    'warning': warning,
    'info': info
}