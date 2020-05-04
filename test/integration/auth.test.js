process.env.NODE_ENV = "testing";

const chai = require("chai");
const server = require("../../server");
const should = require("chai").should();
const chaiHttp = require("chai-http");

const User = require("../../models/Users");

const bcrypt = require("bcryptjs");

const { register, login } = require("../data/auth.json");

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

            res.body.should.have.property("name");
            res.body.should.have.property("email");
            res.body.should.have.property("password");

            res.body.name.should.be.a("object");
            res.body.email.should.be.a("string");
            res.body.password.should.be.a("string");

            res.body.name.first.should.be.a("string");
            res.body.name.last.should.be.a("string");

            done();
        });
    });

//     it("It should return a 500 status from the model with the error message when a field is left blank", done => {
//         chai.request(server)
//         .post("/api/users")
//         .send(register.missing)
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.should.have.property("status", 500);

//             res.body.should.have.property("message");
            
//             done();
//         });
//     });

//     it("It should return a 400 status when there is an invalid email", done => {
//         chai.request(server)
//         .post("/api/users")
//         .send(register.invalidEmail)
//         .end((err, res) => {
//             if(err) throw err;

//             // console.log(res);
           
//             res.should.have.property("status", 400);

//             res.body.should.have.property("message");

//             done();
//         });
//     });

//     it("It should return a 400 status with the error message when the user's password is too short", done => {
//         chai.request(server)
//         .post("/api/users")
//         .send(register.shortPassword)
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.should.have.property("status", 400);

//             res.body.should.have.property("message");

//             done();
//         });
//     });
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

//     it("It should return a 200 status with the user object", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be(200);
    
//             res.body.should.be.a("object");
        
//             res.body.should.have.property("name");
//             res.body.should.have.property("email");

//             res.body.name.should.be.a("object");
//             res.body.name.should.have.property("first");
//             res.body.name.should.have.property("last");

//             res.body.name.first.should.be.a("string");
//             res.body.name.last.should.be.a("string");

//             res.body.email.should.be.a("string");

//             done();
//         });
//     });

//     it("It should return a 404 status if the user object could not be retrieved", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.should.have.property("status", 404);

//             res.body.should.have.property("message", "User information could not be found");

//             done();
//         });
//     });

//     it("It should return a 401 status if the request is not successfully authenticated", done => {
//         chai.request(server)
//         .get("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.should.have.property("status", 401);

//             res.body.should.have.property("message");

//             done();
//         });
//     });
// });

// describe("DELETE /api/users", () => {
//     it("It should return a 200 status code when the user's account is successfully deleted", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.should.have.property("status", 200);

//             done();
//         });
//     });

//     it("It should return a 404 status if the user's account could not be found", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.should.have.property("status", 404);

//             res.body.should.have.property("message");

//             done();
//         });
//     });

//     it("It should return a 401 status if the request is not successfully authenticated", done => {
//         chai.request(server)
//         .delete("/api/users")
//         .end((err, res) => {
//             if(err) throw err;
        
//             res.should.have.property("status", 401);

//             res.body.should.have.property("message");

//             done();
//         });
//     });
// });

describe("POST /api/users/access-token", () => {
    // beforeEach(done => {
    //     bcrypt.genSalt(10, (err, salt) => {        
    //         bcrypt.hash(register.good.password, salt, (err, hash) => {            
    //             User.create({
    //                 name: {
    //                     first: register.good.first,
    //                     last: register.good.last
    //                 },
    //                 email: register.good.email,
    //                 password: hash
    //             });
    //         });
    //     });

    //     done();
    // });

    it("It should return a 201 status and the success message", done => {
        chai.request(server)
        .post("/api/users/access-token")
        .send({
            email: login.good.email,
            password: login.good.password
        })
        .end((err, res) => {
            if(err) throw err;

            res.should.have.property("status", 201);

            res.body.should.be.a("string");

            res.body.should.equal("Login successful");

            done();
        });
    });

    // it("It should return 404 status if the email isn't already registered", done => {
    //     chai.request(server)
    //     .post("/api/users/access-token")
    //     .end((err, res) => {
    //         if(err) throw err;
           
    //         res.should.have.property("status", 404);

    //         done();
    //     });
    // });

    // it("It should return a 400 status if the password is incorrect", done => {
    //     chai.request(server)
    //     .post("/api/users/access-token")
    //     .end((err, res) => {
    //         if(err) throw err;
           
    //         res.should.have.property("status", )

    //         done();
    //     });
    // });
});

// describe("DELETE /api/users/access-token", () => {
//     it("It should return a 200 status code", done => {
//         chai.request(server)
//         .delete("/api/users/access-token")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be(200);

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users/access-token")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .delete("/api/users/access-token")
//         .end((err, res) => {
//             if(err) throw err;
           
//             res.status.should.be();

//             done();
//         });
//     });
// });