const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, email, school){
        let r = Math.floor(Math.random() * 100);
        let iId = "I-" + r;
        super(iId, 3, name, email, "Intern");
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
}
module.exports = Intern;