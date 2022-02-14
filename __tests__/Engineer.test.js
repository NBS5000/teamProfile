const Engineer = require("../assets/js/engineer");

describe("Employee", () => {
    describe("getGit", () => {
        it("should return the engineers Github name", () => {
            const emp = new Engineer("Darth Vader", "darth@empire.com", "sithLord");
            const name = emp.getGit();

            expect(name).toBe("sithLord");
        })
    });
});



// constructor(name, email, git){
//     let r = Math.floor(Math.random() * 100);
//     let eId = "E-" + r;
//     super(eId, 2, name, email, "Engineer");