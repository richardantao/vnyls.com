process.env.NODE_ENV = "testing";

const chai = require("chai");
const server = require("../../server");
const should = require("chai").should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("/GET /api/songs", () => {
    it("It should return a 200 status and the songs array", done => {
        chai.request(server)
        .get("/api/songs")
        .end((err, res) => {
            if(err) throw err;

            res.should.have.property("status", 200);

            res.body.should.be.a("array");

            res.body.length.should.equal(23);

            res.body.map(link => link.should.be.a("string"));

            done();
        });
    });
});