const {Schema} = require("mongoose");
const {model} = require("mongoose");

const orderSchema = new Schema({
    name : String,
    curr_price : Number,
    target_price : Number,
    order_qty : Number,
    mode : String,
});

const Orders = model("order",orderSchema);
module.exports = Orders;