// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
const { promisify } = require("util");

const writeFileAsync = promisify(fs.writeFile);
// TODO: Create an array of questions for user input, all questions from read me file
const questions = [
  {
    type: "input",
    message: "What is the Title of your Project?",
    name: "title",
    validate: function (title) {
      if (title) {
        return true;
      }
      return 'To make your ReadME prefessional include Title of you rproject'
    }
  },
  {
    type: "input",
    message: "Table of Contents",
    name: "contents",
  },
  {
    type: "input",
    message: "Describe installation",
    name: "installation",
  },
  {
    type: "list",
    message: "Choose your license type? ",
    name: "license",
    choices: ["MIT", "Mozilla"],
  },
  {
    type: "input",
    message: "Contributors",
    name: "contributors",
  },
  {
    type: "input",
    message: "What are the tests?",
    name: "Tests",
  },
  {
    type: "input",
    message: "additional questions?",
    name: "Questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  generateMarkdown();
}

// TODO: Create a function to initialize app
function init() {
  // inquirer location, user input
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("README.md", response));

  fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// Function call to initialize app
init();
