const inquirer = require('inquirer');

//const fs = require('fs');

//const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

//removed generatePage function to its own page-template.js file to reduce bloat on this file//


//fs.writeFile('index.html', generatePage(name, github), err => {
//if (err) throw err;

//console.log('portfolio complerte! checkout index.html to see the output');
//});
inquirer
    .prompt([
        {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));