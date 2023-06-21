// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
const { writeFile } = require("fs").promises;


// Generate Redme File structure linked
const generateMarkdown = require("./utils/generateMarkdown");

// Questions linked from utils 
const questions = require("./utils/questions");
const { promisify }  = require("util");

const writeFileAsync = promisify(generateMarkdown);
  // TODO: Create an array of questions for user input, all questions from read me file


  function userPrompt() {
    return prompt(questions);
  }

  // TODO: Create a function to write README file
  // function writeToFile(fileName, data) {
  // generateMarkdown();
  // }

  // TODO: Create a function to initialize app
  async function init() {
  // inquirer location, user input

  try {
    const response = await userPrompt();
    console.log(JSON.stringify(response, null, '\t'));

    const readme = generateMarkdown(response);
    await writeFileAsync("ReadMe.md", readme);

    console.log('Successfully wrote to README.md');
  }
  catch (err) {
    console.log(err);
  }
  
}

// Function call to initialize app
init();
