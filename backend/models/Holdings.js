//----- Holdings Schema -----

const {Schema} = require("mongoose");
const {model} = require("mongoose");

const holdingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

const Holdings = model("holding",holdingSchema);
module.exports = Holdings;