const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, name, email, num){
        super(id, 1, name, email, "Manager");
        this.num = num;
    }
}