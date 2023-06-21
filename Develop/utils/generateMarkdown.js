// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "MIT license badge"
  } else if(license === "Mozilla") {
    return "Mozilla badge"
  } else {
    return ""
  }
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "https://www.mit.edu/~amini/LICENSE.md"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let additionalProjectLinks = '';
  if (response.ProjectLinks) {
    additionalProjectLinks = response.ProjectLinks.slit(',').join('<br>'); 
  } 

  }

  return `
  
  # ${response.title.toUpperCase()}

## Description
${response.description}
`;

## Screenshots
${screenshots}
`;

# 
${data.description}
`;


}

module.exports = generateMarkdown;
