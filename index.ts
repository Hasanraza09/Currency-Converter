#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

// Define currency rates
let currency: { [key: string]: number } = {
    "USD": 1,
    "EUR": 0.91,
    "GBP": 0.76,
    "INR": 74.54,
    "PKR": 280,
    "AUD": 1.32,
    "CAD": 1.26,
    "JPY": 114.59,
    "CNY": 6.35,
    "CHF": 0.93
};

let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: chalk.green("Enter From Country"),
        type: "list",
        choices: Object.keys(currency)
    },
    {
        name: 'to',
        message: chalk.green("Enter To Country"),
        type: "list",
        choices: Object.keys(currency)
    },
    {
        name: 'amount',
        message: chalk.green("Enter your Amount: "),
        type: "number"
    }
]);

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];

let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(chalk.blue.bgHex('#ADD8E6')(`Converted Amount: ${convertedAmount.toFixed(2)}`));
