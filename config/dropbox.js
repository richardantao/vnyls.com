const { Dropbox } = require("dropbox");
const axios = require("axios");

const accessToken = process.env.DROPBOX_ACCESS_TOKEN;

module.exports = new Dropbox({ accessToken, fetch: axios });