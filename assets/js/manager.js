const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, office){
        let r = Math.floor(Math.random() * 100);
        let mId = "E-" + r;
        super(mId, 1, name, email, "Manager");
        this.office = office;
    }
}

module.exports = Manager;