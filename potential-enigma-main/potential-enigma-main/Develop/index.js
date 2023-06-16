// TODO: Include packages needed for this application

var generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input, all questions from read me file
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "password",
    message: "What is your password?",
    name: "password",
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    generateMarkdown();
}

// TODO: Create a function to initialize app
function init() {
  // inquirer location, user input
  inquirer.prompt(questions).then((response) => writeToFile("README.md", response));
}

// Function call to initialize app
init();
