const mongoose = require("mongoose");

const prefixSchema = mongoos.Schema({
  serverID: String;
  prefix: String

})

module.exports = mongoose.model("Prefix", prefixSchema);
