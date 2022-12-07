const Crypto = require("../models/cryptoModel");
const axios = require("axios");
exports.cryptoCoins = async (req, res) => {
  try {
    req.headers["authorisation"] =
      "Bearer cbc053e9-9b7b-4174-8883-5c6cf002c8c8";
    let options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
    };
    let cryptoData = await axios(options);
    let data = cryptoData.data.data.sort(
      (a, b) => a.changePercent24Hr - b.changePercent24Hr
    );
    await Crypto.create(data);

    console.log(req.headers);
    return res.status(200).send({ status: true, data });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};
