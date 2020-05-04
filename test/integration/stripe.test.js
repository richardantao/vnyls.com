process.env.NODE_ENV = "testing";

const chai = require("chai");
const server = require("../../server");
const should = require("chai").should();
const chaiHttp = require("chai-http");

const { good } = require("../data/stripe.json");

chai.use(chaiHttp);

describe("POST /api/stripe/subscriptions", () => {
    it("It should return a 201 status and the newly created Subscription object", done => {
        chai.request(server)
        .post("/api/stripe/subscriptions")
        .send(good)
        .end((err, res) => {
            if(err) throw err;

            res.should.have.property("status", 201);

            res.body.should.be.a("object");

            res.body.should.have.property("object");
            res.body.object.should.equal("subscription");

            done();
        });
    });

    it("It should return a 500 status ", done => {
        chai.request(server)
        .post("/api/stripe/subscriptions")
        .send() // fill in with error data
        .end((err, res) => {
            if(err) throw err;

            res.should.have.property("status", 500);

            done();
        });
    });
});