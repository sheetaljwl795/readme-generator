const licenseSelection = (license) => {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Mozilla':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'Perl':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
            break;
        default:
            break;
    }
 }

const generateReadMe = (data) => {
return `
${licenseSelection(data.license)}

# ${data.title}

## Description
${data.description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Guidelines](#guidelines)
- [Test](#test)
- [License](#license)    
- [Contact](#contact-information)
- [How To Contribute](#how-to-contribute)  

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
* My github profile is [${data.username}](https://www.github.com/${data.username}) 
* You can reachout to me at ${data.email} for any additional questions.

## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
`;
}

module.exports = generateReadMe