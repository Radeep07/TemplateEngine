const empData = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require(`inquirer`);
const fs = require(`fs`);
var managerData=[];
var engineerData=[];
var internData=[];
//create a function create team and with swith cases for creating different team members and its recurrsive
function main() {
  inquirer.prompt([{
    type: "list",
    name: "memberRole",
    message: "Please enter the role of your choice",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
      "Finish"
    ]
  }]).then(function (choice) {
    switch (choice.memberRole) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
        break;
    }
  })
}
//add member as manager
function addManager() {
  //console.log("creating manager");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter Manager name:"
    },
    {
      type: "input",
      name: "id",
      message: "Please enter Manager id:"
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Manager email:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Please enter Manager office phone number:"
    }
  ]).then(function(options){
    //
    const manager = new Manager(options.name,options.id,options.email,options.officeNumber);
    managerData.push(manager);
    console.table(managerData);
    main();
  })
  
}
//add member as Engineer
function addEngineer() {
  //console.log("creating Engineer");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter Engineer name:"
    },
    {
      type: "input",
      name: "id",
      message: "Please enter Engineer id:"
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Engineer email:"
    },
    {
      type: "input",
      name: "github",
      message: "Please enter Engineer Github:"
    }
  ]).then(function(options){
    //
    const engineer = new Engineer(options.name,options.id,options.email,options.github);
    engineerData.push(engineer);
    console.table(engineerData);
    main();
  })
}
//add member as Intern
function addIntern() {
  //console.log("creating Intern");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter Intern name:"
    },
    {
      type: "input",
      name: "id",
      message: "Please enter Intern id:"
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Intern email:"
    },
    {
      type: "input",
      name: "school",
      message: "Please enter Intern school:"
    }
  ]).then(function(options){
    //
    const intern = new Intern(options.name,options.id,options.email,options.school);
    internData.push(intern);
    console.table(internData);
    main();
  })
}

function buildTeam() {
  console.log("creating buildTeam");
  
}
main();