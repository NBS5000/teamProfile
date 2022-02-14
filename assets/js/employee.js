class Employee {
    constructor(id, level, name, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        // manager = 1, engineer = 2, intern = 3
        this.level = level;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;