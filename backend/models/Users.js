//----- Users Schema -----

const {Schema} = require("mongoose");
const {model} = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    email: {
        type : String,
        required : [true,"Email Address is required"],
        unique : true
    },
    username: {
        type : String,
        required : [true,"Username is required"]
    },
    password: {
        type : String,
        required: [true,"Password is required"]
    },
    createdAt: {
        type : Date,
        default : new Date()
    }
});

userSchema.pre("save", async function () {      //to Encrypt password before saving in database
  this.password = await bcrypt.hash(this.password, 12);
});

const Users = model("user",userSchema);
module.exports = Users;