const Users = require("../models/Users");
const {createSecretToken} = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

// ----- Signup Controller -----
module.exports.Signup = async (req,res,next)=>{
    try{
        const {email,username,password,createdAt} = req.body;       
        const existingUser = await Users.findOne({email});          //checking if User already Exists
        if(existingUser){
            return res.json({message: "User Already Exists!"});
        }

        const newUser = await Users.create({email,username,password,createdAt});    //storing User data in database
        const token = createSecretToken(newUser._id);
        res.cookie("token", token, {                    //creating and sending token to client's browser
        httpOnly: false,
        secure: true,
        sameSite: "None"
        });

        res.status(201).json({ message: "User signed in successfully", success: true, newUser });
        next();

    }catch(err){
        console.error(err);
    }
};

// ----- Login Controller -----
module.exports.Login = async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.json({message: "All Fields are Required!"});
        }
        const user = await Users.findOne({email});
        if(!user){
            return res.json({message:"Incorrect Email"});
        }
        const pass = await bcrypt.compare(password,user.password);
        if(!pass){
            return res.json({message:"Incorrect Password"});
        }

        const token = createSecretToken(user._id);      //creating and sending token to client's browser
        res.cookie("token", token, {
        httpOnly: false,
        secure: true,
        sameSite: "None"
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next();

    }catch(err){
        console.error(err);
    }
}
