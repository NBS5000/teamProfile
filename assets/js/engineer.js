const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, git){
        let r = Math.floor(Math.random() * 100);
        let id = "E" + r;
        super(id, 2, name, email, "Engineer");
        this.git = git;
    }

    getGit(){
        console.log(this.git);
    }



}