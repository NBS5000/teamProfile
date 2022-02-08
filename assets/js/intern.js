const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school){
        super(id, 3, name, email, "Intern");
        this.school = school;
    }

    getSchool(){
        console.log(this.school);
    }



}
