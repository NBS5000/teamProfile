const Intern = require("../assets/js/intern");

describe("Intern", () => {
    describe("getGit", () => {
        it("should return the interns school", () => {
            const int = new Intern("Grogu", "grogu@luke.com", "Luke's Academy");
            const name = int.getSchool();

            expect(name).toBe("Luke's Academy");
        })
    });
    describe("getRole", () => {
        it("should return the employees role", () => {
            const int = new Intern("Little Anakin", "chosen1@jedi.com", "Jedi Temple");
            const role = int.getRole();

            expect(role).toBe("Intern");
        })
    });
});