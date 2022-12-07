const mongooose = require("mongoose");

const cryptoSchema = new mongooose.Schema({
  symbol: { type: String, unique: true },
  name: { type: String, unique: true },
  marketCapUsd: String,
  priceUsd: String,
});

const Crypto = mongooose.model("cryptoCoins", cryptoSchema);
module.exports = Crypto;
