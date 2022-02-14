const Manager = require("../assets/js/manager");

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("should return the office number", () => {
            const man = new Manager("Obi Wan", "hello@there.com", "12345");
            const num = man.getOfficeNumber();

            expect(num).toBe("12345");
        })
    });
    describe("getRole", () => {
        it("should return the employees role", () => {
            const man = new Manager("Yoda", "swamp@guy.com", "45678");
            const role = man.getRole();

            expect(role).toBe("Manager");
        })
    });
});