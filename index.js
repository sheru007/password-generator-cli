#!/usr/bin/env node
const programe = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword.js')
const savePassword = require('./utils/savePassword.js')

programe.version('1.0.0').description('A simple password generator')
programe
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to password.txt')
    .option('-nn, --no-numbers', 'remove number')
    .option('-ns, --no-symbols', 'remove symbol')
    .parse()

// --<name>   => means default false
// --no-<name>  => means default true
const { length, save, numbers, symbols } = programe.opts()

// generate password
const generatedPassword = createPassword(length, numbers, symbols)

// copy to clipboard
clipboardy.writeSync(generatedPassword)

// output password
console.log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword))
console.log(chalk.yellow("Password copied to clipboard"))

// save to file
if(save){
    savePassword(generatedPassword)
}