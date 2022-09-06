// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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

// Function to generate badges based on license
//  const licenseSelection = (data) => {
//     switch (data.license) {
//         case 'MIT':
//             liBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
//             break;
//         case 'Mozilla':
//             liBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
//             break;
//         case 'ISC':
//             liBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
//             break;
//         case 'Perl':
//             liBadge ='[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
//             break;
//         default:
//             break;
//     }
//  }

// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Success!')
//     );
// };

const generateReadMe = (data) => {

    switch (data.license) {
        case 'MIT':
            liBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla':
            liBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'ISC':
            liBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'Perl':
            liBadge ='[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            break;
        default:
            break;
    };    
    
    return `

    ${liBadge}

    # ${data.title}
    
    ## Description
    ${data.description}
     
    ## Table of Contents
    - [Installation](#instructions)
    - [Usage](#usage)
    - [Guidelines](#guidelines)
    - [Test](#test)
    - [License](#license)    

    ## Installation
    ${data.instructions}

    * Your application should prompt the user for information like README entitled Description, Installation, Usage, Contributing, and Tests and GitHub URL. Feel free to add any additional prompts you think of.

       
    ## Usage
    ${data.usage}

    ## Guidelines
    ${data.guidelines}

    ## Test
    ${data.test}

    ## License
    ${data.license}

    ## Contact Information
    * My github profile is github.com/${data.username} 
    * You can reachout to me at ${data.email} for any additional questions.

    ## How to Contribute
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    `;

    }

// TODO: Create a function to initialize app
// const init = () {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        
        fs.writeFile("./README.md", generateReadMe(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
  });
// }

// Function call to initialize app
// init() 