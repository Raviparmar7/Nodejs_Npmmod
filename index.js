const chalk = require("chalk");
const validator = require("validator");

 console.log(chalk.yellow("Hello world!"));
 console.log(chalk.green.inverse("success"));
console.log(chalk.red.inverse("False"));

const res = validator.isEmail('Ravi@123.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

