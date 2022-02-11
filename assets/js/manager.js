const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, officeNumber){
        let r = Math.floor(Math.random() * 100);
        let mId = "M-" + r;
        super(mId, 1, name, email, "Manager");
        this.officeNumber = officeNumber;
    }

    getRole(){
        console.log("My role is " + this.role)
        return this.role;
    }
}

module.exports = Manager;