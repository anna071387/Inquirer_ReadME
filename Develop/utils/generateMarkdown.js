

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let additionalProjectLinks = '';
  if (response.ProjectLinks) {
    additionalProjectLinks = response.ProjectLinks.slit(',').join('<br>'); 
  } 

	//Set Screenshots template according to the user iniput
	let screenshots = '';
	if (response.imageURL) {
		for (let i = 0; i < response.imageURL.split(',').length; i++) {
			screenshots += `<kbd>![screenshot-demo${i + 1}](${response.imageURL.split(',')[i].trim()})</kbd>`;
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
    .toLowerCase()}/${response.repoName.trim()}?color=important)](https://github.com/${response.username.trim().toLowerCase()}/${response.repoName.trim()})
  [![project-top-language](https://img.shields.io/github/languages/top/${response.username
    .trim()
    .toLowerCase()}/${response.repoName.trim()}?color=blueviolet)](https://github.com/${response.username.trim().toLowerCase()}/${response.repoName.trim()})
  [![license](https://img.shields.io/badge/License-${response.license
    .toUpperCase()
    .split('-')
    .join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${response.license}/)


  ## Table of Content
    * [Links](#Project-Links)
    * [Screenshots](#Screenshots)
    * [Description](#Description)
    * [User Story](#User-Story)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributing ](#Contributing)
    * [Questions](#Questions)
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

  ## License
    This project is [${response.license.toUpperCase()}](https://choosealicense.com/licenses/${response.license}/) licensed.<br>
    
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

    `;
}

module.exports = generateMarkdown;
