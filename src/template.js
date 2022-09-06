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

Dream-Job-Finder

## Description
${data.description}
This project presented is a simple job search engine.

When the user enters a Job title, city or zip, mile radius, and days posted a list of the most recent 25 job will populate.

More often than not when searching for a job, postings are rarely updated or deleted. Therefore our goal was to find the most recent postings available.

Upon searching through the listings there are some simple features added such as an external link and a save button to your local storage.

If the external link is clicked the user will be brought to a new page where the job listing is originally posted vs the use of a 3rd party interface.

From there the user can apply and then return to our search engine to find the next best fitting opportunity.

To add some appeal there is also a weather widget which contains a 5 day forcast and automatically detects the users location.

    
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

* Very easy to use this application.
*User need to enter their skills, zip code, with in miles, duration of the job posting and will get the jobs list and user can add his favorite jobs and also see the weather for that particular area.


## Usage
${data.usage}

All the job seeker will find the job here.

## Guidelines
${data.guidelines}

## Test
${data.test}

Enter the skills,location,select with in miles,enter how many days job got posted and select submit.



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