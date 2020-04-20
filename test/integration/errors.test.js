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

// describe(() => {
    
// });