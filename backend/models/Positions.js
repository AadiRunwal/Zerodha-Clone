//----- Positions Schema -----

const {Schema} = require("mongoose");
const {model} = require("mongoose");

const positionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const Position = model("position",positionsSchema);
module.exports = Position;