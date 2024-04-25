#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: 'number',
        name: 'weight',
        message: 'Enter your weight in kilograms:',
    },
    {
        type: 'number',
        name: 'height',
        message: 'Enter your height in meters:',
    }
]);
const weight = (answers.weight);
const height = (answers.height);
let Bmi = weight / (height * height);
console.log(`your BMI is ${Bmi}`);
