// create the link to the license, if none return an empty string
function getLicenseLink(license) {
    let licenseLink = `https://spdx.org/licenses/`
    switch (license) {
        case 'MIT':
            licenseLink += `MIT.html`
            break
        case 'ISC':
            licenseLink += `ISC.html`
            break
        case 'GNU 3.0':
            licenseLink += `GPL-3.0-or-later.html`
            break
        case 'GNU 2.0':
            licenseLink += `GPL-2.0-or-later.html`
            break
        case 'Apache 2.0':
            licenseLink += `Apache-2.0.html`
            break
        default:
            return ''
    }
    return licenseLink
}

function renderLicenseBadge(license) {
    let licenseLink = getLicenseLink(license)
    if (licenseLink === '') { // this will not render a badge if there is no license
        return licenseLink 
    }
    return `[![${license} License Badge](https://img.shields.io/badge/LICENSE-${license}-blue)](${licenseLink})`
}

function renderLicenseSection(license, title) {
    let licenseLink = getLicenseLink(license)
    if (licenseLink === '') { // this will render NA if there is no license
        return 'NA'
    }
    return `${title} is released under the terms of the [${license} License](${licenseLink})`
}

// generate all markdown for README file
function generateMarkdown(data) {

    let markdown =
`# ${data.title}

${(data.includeWatermark === true) ? 'Generated with [readme-generator](https://github.com/JaredBoehm/readme-generator)' : ''}

## Description
${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license, data.title)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
My Github: [${data.githubUsername}](https://github.com/${data.githubUsername})

My Email: ${data.email}

${data.contactInstructions}`

    return markdown
}

module.exports = generateMarkdown;
