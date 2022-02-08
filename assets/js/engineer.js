const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, name, email, git){
        super(id, 2, name, email, "Engineer");
        this.git = git;
    }

    getGit(){
        console.log(this.git);
    }



}