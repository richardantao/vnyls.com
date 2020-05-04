process.env.NODE_ENV = "testing";

const rewire = require("rewire");

const chai = require("chai");
const should = require("chai").should();
const chaiHttp = require("chai-http");

const mockController = rewire("./songs");

chai.use(chaiHttp);

describe("GET /api/songs", () => {
    describe("fetchPaths", () => {


    const mockFetchPaths = mockController.__set__({
        "fetchPaths": "",
        "getLinks": ""
    });


        it("", done => {

        });
    });

    describe("getLinks", () => {
        it("", done => {

        });
    });
});