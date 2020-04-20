process.env.NODE_ENV = "testing";

const chai = require("chai");
const server = require("../../server");
const should = require("chai").should();
const chaiHttp = require("chai-http");

const { 
    paypal: { create, execute }, 
    stripe: { payment, key } 
} = require("../data/payments.json");

chai.use(chaiHttp);

// describe("POST /payments/paypal", () => {
//     it("", done => {

//     });

//     it("", done => {

//     });

//     it("", done => {

//     });
// });

// describe("GET /payments/paypal", () => {
//     it("", done => {

//     });

//     it("", done => {

//     });

//     it("", done => {

//     });
// });

// describe("POST /payments/stripe", () => {
//     it("", done => {
//         chai.request(server)
//         .post("/payments/stripe")
//         .send()
//         .end((err, res) => {
//             if(err) throw err;

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .post("/payments/stripe")
//         .send()
//         .end((err, res) => {
//             if(err) throw err;

//             res.should.have.property("status", 500);

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .post("/payments/stripe")
//         .send()
//         .end((err, res) => {
//             if(err) throw err;

//             res.should.have.property("status", 500);
            
//             done();
//         });
//     });
// });

// describe("GET /payments/stripe", () => {
//     it("It should return a 200 status with the publishable key", done => {
//         chai.request(server)
//         .get("/payments/stripe")
//         .end((err, res) => {
//             if(err) throw err;
            
//             res.should.have.property("status", 200);
//             res.body.should.have.property("stripePublishableKey");

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .get("/payments/stripe")
//         .end((err, res) => {
//             if(err) throw err;

//             done();
//         });
//     });

//     it("", done => {
//         chai.request(server)
//         .get("/payments/stripe")
//         .end((err, res) => {
//             if(err) throw err;

//             done();
//         });
//     });
// });