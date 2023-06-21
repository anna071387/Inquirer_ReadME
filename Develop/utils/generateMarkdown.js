// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if(license === "MIT") {
//     return "MIT license badge"
//   } else if(license === "Mozilla") {
//     return "Mozilla badge"
//   } else {
//     return ""
//   }
  // return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   return "https://www.mit.edu/~amini/LICENSE.md"
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let additionalProjectLinks = '';
  if (response.ProjectLinks) {
    additionalProjectLinks = response.ProjectLinks.slit(',').join('<br>'); 
  } 

	//Set Screenshots template according to the user iniput
	let screenshots = '';
	if (answers.imageURL) {
		for (let i = 0; i < answers.imageURL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.imageURL.split(',')[i].trim()})</kbd>`;
		}
  }

  
  //  Structure for the ReadMe file
  return `
  # ${response.title.toUpperCase()}

  [![github-follow](https://img.shields.io/github/followers/${response.username
    .trim()
    .toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${response.username.trim().toLowerCase()})
  [![project-languages-used](https://img.shields.io/github/languages/count/${response.username
    .trim()
    .toLowerCase()}/${response.repoName.trim()}?color=important)](https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()})
  [![project-top-language](https://img.shields.io/github/languages/top/${response.username
    .trim()
    .toLowerCase()}/${response.repoName.trim()}?color=blueviolet)](https://github.com/${answers.username.trim().toLowerCase()}/${answers.repoName.trim()})
  [![license](https://img.shields.io/badge/License-${response.license
    .toUpperCase()
    .split('-')
    .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${response.license}/)


  ## Table of Content
    * [ Links ](#Project-Links)
    * [ Screenshots ](#Screenshots)
    * [ Description ](#Description)
    * [ User Story ](#User-Story)
    * [ Installation ](#Installation)
    * [ Usage ](#Usage)
    * * [ License ](#License)
    * [ Contributing ](#Contributing)
    * [ Questions ](#Questions)
  #

  ## Screenshots
    ${screenshots}

  ## Description
    ${response.description}
    
  ## User Story
    ${response.userStory}

  ## Installation
    ${response.installation}

  ## Usage 
    ${response.usage}
  
  ## Technologies 
    ${response.technologies}
    
  ## Contribution
    ${response.credits}
  
  ## Tests
    ${response.test}

  ## Questions
    Contact the author with any questions!<br>
    Github link: [${response.username
      .trim()
      .toLowerCase()}](https://github.com/${response.username.trim().toLowerCase()})<br>
    Email: ${response.email}

    ## License
    This project is [${response.license.toUpperCase()}](https://choosealicense.com/licenses/${response.license}/) licensed.<br />
  `;
}

module.exports = generateMarkdown;
