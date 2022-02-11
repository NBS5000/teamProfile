const inquirer = require('inquirer');
const fs = require("fs");
const Engineer = require("./assets/js/engineer");
const Intern = require("./assets/js/intern");
const fileName = "team.html";
let htmlStart, htmlMiddle, htmlFile;
let addMore = true;
let staffList = [];
const htmlEnd = `</div><footer></footer></body></html>`;




const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "\n\x1b[4m\x1b[33m**Welcome to the NBS5000 Team System. If you require assistance with a question, simply press return/enter without any input**\x1b[0m \x1b[0m \n\nWhat is your name?\n",
        name: "manName",
        //when: !questions.manName,
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
        //when: !questions.manEmail,
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
        name: "manNum",
        //when: !questions.manNum,
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
                // "My Team is complete",
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


function buildHtmlStart(manName,manEmail,manNum){
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
        <h1>My Team</h1>
    </header>
    <div id="mainContent">

    <div class="person">
        <div class="personHeader">
            <h3>${manName}</h3>
            <h3>Manager</h3>
        </div>
        <div class="personBody">
            <div class="personDetails">
                <table>
                    <tr>
                        <td id="tl" class="tdLeft">ID</td>
                        <td id="tr" class="tdRight">555</td>
                    </tr>
                    <tr>
                        <td class="tdLeft">Email</td>
                        <td class="tdRight">${manEmail}</td>
                    </tr>
                    <tr>
                        <td id="bl" class="tdLeft">Office Number</td>
                        <td id="br" class="tdRight">${manNum}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

`;
}

function buildHtmlStaff(empName,empEmail,git,school){
    let insert;
    if(git){
insert = 
`<tr>
<td id="bl" class="tdLeft">Github</td>
<td id="br" class="tdRight">${git}</td>
</tr>`;
    }else{
insert = 
`<tr>
<td id="bl" class="tdLeft">School</td>
<td id="br" class="tdRight">${school}</td>
</tr>`;
    }
    htmlMiddle = htmlMiddle +
`
<div class="person">
        <div class="personHeader">
            <h3>${empName}</h3>
            <h3>Manager</h3>
        </div>
        <div class="personBody">
            <div class="personDetails">
                <table>
                    <tr>
                        <td id="tl" class="tdLeft">ID</td>
                        <td id="tr" class="tdRight">555</td>
                    </tr>
                    <tr>
                        <td class="tdLeft">Email</td>
                        <td class="tdRight">${empEmail}</td>
                    </tr>
                    ${insert}
                </table>
            </div>
        </div>
    </div>

`;

}

async function htmlBuild(){


    // htmlFile = htmlStart + htmlMiddle + htmlEnd;

    // fs.writeFileSync(fileName, htmlFile);
}

function managerStart(){
    return questions()
    .then((answers)=>buildHtmlStart(answers))
    .catch((err) =>
    err ? console.log(err) : console.log('Huzzah!') )

}
async function addStaff(){
    while(addMore){    
        const answers = await addStaffQ();
        let x;
        // buildHtmlStaff(answers)
        if(answers.empType == "Engineer"){
            x = new Engineer(answers.empName, answers.empEmail, answers.git);
        }else{
            x = new Intern(answers.empName, answers.empEmail, answers.school);
        }
        staffList.push(x);
        console.log(x);
        addMore = answers.addMoreQ;
    }

    console.log(staffList);
}


async function init(){
    await managerStart();

    await addStaff();

    htmlEndBuild();
}

init();