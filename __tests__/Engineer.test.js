const Engineer = require("../assets/js/engineer");

describe("Engineer", () => {
    describe("getGit", () => {
        it("should return the engineers Github name", () => {
            const emp = new Engineer("Darth Vader", "darth@empire.com", "sithLord");
            const name = emp.getGit();

            expect(name).toBe("sithLord");
        })
    });
    describe("getRole", () => {
        it("should return the employees role", () => {
            const eng = new Engineer("R2-D2", "r2@d2.com", "astromech");
            const role = eng.getRole();

            expect(role).toBe("Engineer");
        })
    });
});