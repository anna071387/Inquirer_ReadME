const questions = [
    {
		//Author Name
		type: 'input',
		message: 'Enter your FULL name',
		name: 'authorName',
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid FULL name.';
		},
	},
    {
		//Author Email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
		validate: function(email) {
			let pass = email.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid email.';
		},
	},
    {
		//Github Username
		type: 'input',
		message: 'Enter your github username',
		name: 'username',
		validate: function(username) {
			if (username) {
				return true;
			}

			return 'It is required to enter your github username.';
		},
	},
    {
		// Github REPO name
		type: 'input',
		message: 'Enter your Project Github Repo name (* Be sure your input is the SAME as the REPO name on Github.)',
		name: 'repoName',
		validate: function(reponame) {
			if (reponame) {
				return true;
			}

			return 'It is required to enter your Github Project Repo name.';
		},
	},
  {
    type: "input",
    message: "What is the Title of your Project?",
    name: "title",
    validate: function (title) {
      if (title) {
        return true;
      }
      return "To make your ReadME look prefessional include Title of you rproject.";
    },
  },
  {
    type: "input",
    message: "what are the parts of Table of Contents?",
    name: "contents",
  },
  {
    type: "input",
    message: "How to install the app?",
    name: "installation",
  },
  {
    type: "input",
    message: "How to use this app?",
    name: "Usage",
  },
  {
    type: "list",
    message: "Please select a license for your project.",
    name: "license",
    choices: [
      {
        name: "MIT",
        value: "mit",
      },
      {
        name: "Mozilla Public 2.0",
        value: "mpl-2.0",
      },
      {
        name: "APACHE 2.0",
        value: "apache-2.0",
      },
      {
        name: "Boost Software 1.0 ",
        value: "bsl-1.0",
      },
      {
        name: "GNU AGPLv3",
        value: "agpl-3.0",
      },
      {
        name: "GNU GPLv3",
        value: "gpl-3.0",
      },
      {
        name: "GNU LGPLv3",
        value: "lgpl-3.0",
      },
      {
        name: "The Unlicense",
        value: "unlicense",
      },
    ],
  },
  {
    type: "input",
    message: "How to add contributions to the app?",
    name: "contributors",
  },
  {
    type: "input",
    message: "For Any Additionall questions please email us at:",
    name: "Questions",
  },
];

module.exports = questions;
