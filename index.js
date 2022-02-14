const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require("./assets/js/engineer");
const Intern = require("./assets/js/intern");
const Manager = require("./assets/js/manager");
const fileName = "team.html";
let htmlStart, htmlFile;
let htmlMiddle = "";
let addMore = true;
let staffList = [];
const htmlEnd = `</div><footer></footer></body></html>`;




const questions = () => {
    // Initial questions for Manager to answer
    return inquirer.prompt([
    {
        type: "input",
        message: "\n\x1b[4m\x1b[33m**Welcome to the NBS5000 Team System. If you require assistance with a question, simply press return/enter without any input**\x1b[0m \x1b[0m \n\nWhat is your name?\n",
        name: "manName",
        validate(answer) {
            if(!answer) {
                return "Please enter your name"
            }
            return true
        }
    },    
    {
        type: "input",
        message: " \nWhat is your email address?\n",
        name: "manEmail",
        validate: (answer) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if(!emailRegex.test(answer)) {
                return "Please enter a valid email address format"
            }
            return true
        }
    },
    {
        type: "input",
        message: " \nWhat is your office number?\n",
        name: "office",
        validate(answer) {
            if(!answer) {
                return "Your office number, what is it?"
            }
            return true
        }
    },
])};

const addStaffQ = () => {

    return inquirer.prompt([

        // The Menu
        {
            type: "list",
            message: "\n\n\x1b[32mAdd Team Members\x1b[0m\n\nWhich type of Team Member do you wish to create?",
            choices: [
                "Engineer",
                "Intern",
            ],
            name: 'empType',
        },
        // If they select Engineer or Intern
        {
            type: "input",
            message: " \nWhat is their name?\n",
            name: "empName",
            when: (answers) => answers.empType !== "My Team is complete",
            validate(answer) {
                if(!answer) {
                    return "The employee's name, what is it?"
                }
                return true
            }
        },

        {
            type: "input",
            message: " \nWhat is their email address?\n",
            name: "empEmail",
            when: (answers) => answers.empType !== "My Team is complete",
            validate: (answer) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(!emailRegex.test(answer)) {
                    return "Please enter a valid email address format"
                }
                return true
            }
        },
        // If they select Engineer
        {
            type: "input",
            message: " \nWhat is their Github profile name?\n",
            name: "git",
            when: (answers) => answers.empType === "Engineer",
            validate(answer) {
                if(!answer) {
                    return "What's their Github name?"
                }
                return true
            }
        },
        // If they select Intern
        {
            type: "input",
            message: " \nWhat is the name of their school?\n",
            name: "school",
            when: (answers) => answers.empType === "Intern",
            validate(answer) {
                if(!answer) {
                    return "What's their school name?"
                }
                return true
            }
        },
        {
            type: 'confirm',
            name: 'addMoreQ',
            message: 'Do you wish to add another team member? ',
            default: true
        }
])};


function buildHtmlStart(){

htmlStart = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" type="text/css" href="./assets/css/reset.css"/>
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css"/>
    <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico">
</head>
<body>
    <header>
        <h1>${staffList[0].name}'s Team</h1>
    </header>
    <div id="mainContent">

    <div class="person">
        <div class="personHeader">
        <img class="personImg" src="./assets/images/manager.png" alt="Role Icon">
            <h3>${staffList[0].name}</h3>
            <h3>Manager</h3>
        </div>
        <div class="personBody">
            <div class="personDetails">
                <table>
                    <tr>
                        <td id="tl" class="tdLeft">ID</td>
                        <td id="tr" class="tdRight">${staffList[0].id}</td>
                    </tr>
                    <tr>
                        <td class="tdLeft">Email</td>
                        <td class="tdRight"><a href="mailto:${staffList[0].email}">${staffList[0].email}</a></td>
                    </tr>
                    <tr>
                        <td id="bl" class="tdLeft">Office</td>
                        <td id="br" class="tdRight">${staffList[0].officeNumber}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

`;
}

async function buildHtml(){

    staffList = staffList.sort((a, b) => {
        if(a.level < b.level) { return -1; }
        if(a.level > b.level) { return  1; }
        return 0;
    });

    
    let len = staffList.length;
    var loop = 1;
    while(loop < len){
        let insert;
        if(staffList[loop].git){
        insert = 
    `<tr>
                        <td id="bl" class="tdLeft">Github</td>
                        <td id="br" class="tdRight"><a href="https://github.com/${staffList[loop].git}" target="_blank">${staffList[loop].git}</a></td>
                    </tr>`;
    }else{
        insert = 
    `<tr>
                        <td id="bl" class="tdLeft">School</td>
                        <td id="br" class="tdRight">${staffList[loop].school}</td>
                    </tr>`;
    }

    let img;
    if(staffList[loop].role == "Engineer"){
        img = "eng";
    }else{
        img = "intern";
    }

    htmlMiddle = htmlMiddle +
`
<div class="person">
        <div class="personHeader">
            <img class="personImg" src="./assets/images/${img}.png" alt="Role Icon">
            <h3>${staffList[loop].name}</h3>
            <h3>${staffList[loop].role}</h3>
        </div>
        <div class="personBody">
            <div class="personDetails">
                <table>
                    <tr>
                        <td id="tl" class="tdLeft">ID</td>
                        <td id="tr" class="tdRight">${staffList[loop].id}</td>
                    </tr>
                    <tr>
                        <td class="tdLeft">Email</td>
                        <td class="tdRight"><a href="mailto:${staffList[loop].email}">${staffList[loop].email}</a></td>
                    </tr>
                    ${insert}
                </table>
            </div>
        </div>
    </div>

`;
loop++;
};
    htmlFile = htmlStart + htmlMiddle + htmlEnd;

    fs.writeFileSync(fileName, htmlFile);
}

function newManager(answers){
        let m = new Manager(answers.manName, answers.manEmail, answers.office);
        staffList.push(m);
        buildHtmlStart();
}

async function managerStart(){

    const mAnswers = await questions();
    newManager(mAnswers);

}

async function addStaff(){

    while(addMore){    
        const answers = await addStaffQ();
        let x;
        if(answers.empType == "Engineer"){
            x = new Engineer(answers.empName, answers.empEmail, answers.git);
        }else{
            x = new Intern(answers.empName, answers.empEmail, answers.school);
        }
        staffList.push(x);
        addMore = answers.addMoreQ;
    }
}


async function init(){

    await managerStart();

    await addStaff();

    buildHtml();
}

init();