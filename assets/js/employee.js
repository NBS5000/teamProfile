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
        console.log("My name is " + this.name);
        return this.name;
    }
    getId(){
        console.log("My id is " + this.id);
        return this.id;
    }
    getEmail(){
        console.log("My email is " + this.email);
        return this.email;
    }
    getRole(){
        console.log("My role is " + this.role)
        return this.role;
    }

}