const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, git){
        let r = Math.floor(Math.random() * 100);
        let eId = "E" + r;
        super(eId, 2, name, email, "Engineer");
        this.git = git;
    }

    getGit(){
        console.log(this.git);
    }
}

module.exports = Engineer;