const Employee = require("../assets/js/employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the employees name", () => {
            const emp = new Employee("99", 2, "Mr Test", "test@test.com", "Engineer");
            const name = emp.getName();

            expect(name).toBe("Mr Test");
        })
    });
    describe("getId", () => {
        it("should return the employees ID", () => {
            const emp = new Employee("70", 1, "Mrs Test", "mrstest@test.com", "Manager");
            const id = emp.getId();

            expect(id).toBe("70");
        })
    });
    describe("getEmail", () => {
        it("should return the employees email", () => {
            const emp = new Employee("14", 2, "Mr Test Sr", "srtest@test.com", "Engineer");
            const email = emp.getEmail();

            expect(email).toBe("srtest@test.com");
        })
    });
    describe("getRole", () => {
        it("should return the employees role", () => {
            const emp = new Employee("30", 3, "Mr Test Jr", "jrtest@test.com", "Intern");
            const role = emp.getRole();

            expect(role).toBe("Intern");
        })
    });
});


// getName(){
//     console.log("My name is " + this.name);
//     return this.name;
// }
// getId(){
//     console.log("My id is " + this.id);
//     return this.id;
// }
// getEmail(){
//     console.log("My email is " + this.email);
//     return this.email;
// }
// getRole(){
//     console.log("My role is " + this.role)
//     return this.role;
// }