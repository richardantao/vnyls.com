const { Dropbox } = require("dropbox");
const fetch = require("isomorphic-fetch");
const accessToken = process.env.DROPBOX_ACCESS_TOKEN;

module.exports = new Dropbox({ accessToken, fetch });