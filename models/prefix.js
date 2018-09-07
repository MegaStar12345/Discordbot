const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const prefixSchema = new Schema({
  serverID: String,
  prefix: String

})
const Prefix = mongoose.model("prefix", prefixSchema);
module.exports = Prefix
