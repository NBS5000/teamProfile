const inquirer = require('inquirer');
const fs = require("fs");
const fileName = "index.html";




const startQuestions = () => {
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
        message: " \nWhat is your contact number?\n",
        name: "manTel",
        validate(answer) {
            if(!answer) {
                return "Your telephone number, what is it?"
            }
            return true
        }
    },
])};



const personQuestions = () => {
    return inquirer.prompt([
        // The Menu
        {
            type: "list",
            message: "\n\n\x1b[32mTeam Members\x1b[0m\n\nWhat type of Team Member do you wish to create?",
            choices: [
                "Engineer",
                "Intern",
                "My Team is complete",
            ],
            name: 'empType',
        },
        // If they select Engineer or Intern
        {
            type: "input",
            message: " \nWhat is their name?\n",
            name: "empName",
            validate(answer) {
                if(!answer) {
                    return "The engineer's name, what is it?"
                }
                return true
            }
        },

        {
            type: "input",
            message: " \nWhat is their email address?\n",
            name: "empEmail",
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
            message: " \nWhat is the name ofg their school?\n",
            name: "school",
            when: (answers) => answers.empType === "Intern",
            validate(answer) {
                if(!answer) {
                    return "What's their Github name?"
                }
                return true
            }
        },
])};