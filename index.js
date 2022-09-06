// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./src/template")

// Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project?',
      },  
      {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project ?',
      },  
      {
          type: 'input',
          name: 'instructions',
          message: 'Enter installation instrcutions',
      },  
      {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information',
      },  
      {
          type: 'input',
          name: 'guidelines',
          message: 'Enter contribution guidelines',
      },  
      {
          type: 'input',
          name: 'test',
          message: 'Enter test instructions',
      },  
      {
          type: 'list',
          name: 'license',
          message: 'Select license',
          choices: ['MIT','Mozilla','ISC','Perl'],
      },  
      {
          type: 'input',
          name: 'username',
          message: 'Enter your github username',
      },  
      {
          type: 'input',
          name: 'email',
          message: 'Enter your email address (ex: joedoe@acme.com)',
      },
    ];

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        
        fs.writeFile("README.md", generateReadMe(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
  });
}

// Function call to initialize app
init() 