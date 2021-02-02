//imports
const inquirer = require("inquirer");
const template = require("./template")
const fs = require("fs");

//ask user for info
const questions = [{
        type: "input",
        message: "GitHub username?",
        name: "UserName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },

    {
        type: "input",
        message: "Title of the app?",
        name: "Title",
    },
    {
        type: "input",
        message: "Description of the app?",
        name: "Description",
    },
    {
        type: "input",
        message: "Dependencies needed to run the app?",
        name: "Installation",
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "What license was used for this README?",
        name: "License",
    },

    {
        type: "input",
        message: "Please add contributors",
        name: "Contributor",
    },
    {
        type: "input",
        message: "Command to run the App?",
        name: "Test",
    }
];

//create a file 
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName);
    })

}

//initialize
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("newReadME.md", template(data));
        })
}

//start app
init();