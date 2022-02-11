const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school){
        let r = Math.floor(Math.random() * 100);
        let id = "I" + r;
        super(id, 3, name, email, "Intern");
        this.school = school;
    }

    getSchool(){
        console.log(this.school);
    }



}
