// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const gm = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Repo Title:',
    },
    {
        type: 'confirm',
        name: 'includeWatermark',
        message: 'Would you like to include the watermark?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Repo Description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Details:',
    },
    {
        type: 'list',
        message: 'License:',
        name: 'license',
        choices: ['MIT', 'ISC', 'GNU 3.0', 'GNU 2.0', 'Apache 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Instructions:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Details:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Github Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'contactInstructions',
        message: 'Contact Instructions:',
    }
]

inquirer
    .prompt(questions)
    .then((data) => {
        fs.writeFile('README.md', gm(data), (err) => {
            err ? console.log(err) : console.log('README Generated!')
        })
    })