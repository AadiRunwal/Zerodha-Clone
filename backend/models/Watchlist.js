//----- Watchlist Schema -----

const {Schema} = require("mongoose");
const {model} = require("mongoose");

const watchlistSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

const watchlist = model("watchlist",watchlistSchema);
module.exports = watchlist;