const inquirer = require(`inquirer`);
const fs = require(`fs`);
//questions to ask user(/employee)
const employeeQuestions = [
  {
    type: "input",
    message: "Plese enter your name:",
    name: "name"
  },
  {
    type: "input",
    message: "Enter your employee ID:",
    name: "id"
  },
  {
    type: "input",
    message: "Enter your email ID:",
    name: "email"
  }
];

// question specific to manager  
const managerQuestion = [
  {
    type: "input",
    message: "Enter phone number:",
    name: "number"
  }
];

//specific question to engineer 
const engineerQuestion = [
  {
    type: "input",
    message: "Enter your github username:",
    name: "github"
  }
];

// intern question
const internQuestion = [
  {
    type: "input",
    message: "Enter college name:",
    name: "school"
  }
];

