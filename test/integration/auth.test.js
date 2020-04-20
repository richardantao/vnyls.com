process.env.NODE_ENV = "testing";

const chai = require("chai");
const server = require("../../server");
const should = require("chai").should();
const chaiHttp = require("chai-http");

const User = require("../../models/Users");

const bcrypt = require("bcryptjs");

const { register } = require("../data/auth.json");

chai.use(chaiHttp);

describe("POST /api/users", () => {
    beforeEach(done => {
        User.deleteMany()
        .then(() => {
            done();
        })
        .catch(err => {
            return err;
        });
    });

    it("It should return a 201 status with the new user object", done => {
        chai.request(server)
        .post("/api/users")
        .send(register.good)
        .end((err, res) => {
            if(err) throw err;
           
            res.should.have.property("status", 201);
            res.body.should.be.a("object");

            done();
        });
    });

    it("It should return a 500 status from the model with the error message when a field is left blank", done => {
        chai.request(server)
        .post("/api/users")
        .send(register.missing)
        .end((err, res) => {
            if(err) throw err;
           
            res.should.have.property("status", 500);
            res.body.should.have.property("message");

            done();
        });
    });

    it("It should return a 400 status when there is an invalid email", done => {
        chai.request(server)
        .post("/api/users")
        .send(register.invalidEmail)
        .end((err, res) => {
            if(err) throw err;

            // console.log(res);
           
            res.should.have.property("status", 400);
            res.body.should.have.property("message");

            done();
        });
    });

    it("It should return a 400 status with the error message when the user's password is too short", done => {
        chai.request(server)
        .post("/api/users")
        .send(register.shortPassword)
        .end((err, res) => {
            if(err) throw err;
           
            res.should.have.property("status", 400);
            res.body.should.have.property("message");

            done();
        });
    });
});

// describe("GET /api/users", () => {
//     beforeEach(done => {
//         User.deleteMany()
//         .then(() => {
//             done();
//         })
//         .catch(err => {
//             return err;
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be(200);
//             res.body.should.be.a("object");

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();
//             res.body.should.be.a("object");

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();
//             res.body.should.be.a("object");

//             done();
//         });
//     });
// });

// describe("DELETE /api/users", () => {
//     it("", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.status.should.be(200);

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.status.should.be();

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.status.should.be();

//             done();
//         });
//     });
// });

describe("POST /api/users/authentication", () => {
    beforeEach(done => {
        bcrypt.genSalt(10, (err, salt) => {        
            bcrypt.hash(register.good.password, salt, (err, hash) => {            
                User.create({
                    name: {
                        first: register.good.first,
                        last: register.good.last
                    },
                    email: register.good.email,
                    password: hash
                });
            });
        });

        done();
    });

    it("It should return a 201 status and the cookie object", done => {
        chai.request(server)
        .post("/api/users/authentication")
        .send({ 
            email: register.good.email,
            password: register.good.password
        })
        .end((err, res) => {
            if(err) throw err;

            console.log(res);
           
            res.should.have.property("status", 201);
            res.body.should.have.property("cookie");

            done();
        });
    });

    it("It should return 404 status if the email isn't already registered", done => {
        chai.request(server)
        .post("/api/users/authentication")
        .end((err, res) => {
            if(err) throw err;
           
            res.should.have.property("status", 404);

            done();
        });
    });

    it("It should return a 400 status if the password is incorrect", done => {
        chai.request(server)
        .post("/api/users/authentication")
        .end((err, res) => {
            if(err) throw err;
           
            res.status.should.be();

            done();
        });
    });
});

// describe("DELETE /api/users/authentication", () => {
//     it("It should return a 200 status code", done => {
//         chai.request(server)
//         .delete("/api/users/authentication")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be(200);

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users/authentication")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users/authentication")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();

//             done();
//         });
//     });
// });