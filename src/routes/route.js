const express = require("express");
const route = express.Router();
const crypto = require("../controller/cryptoController");
route.get("/cryptoCoins", crypto.cryptoCoins);

module.exports = route;
