const Users = require("../models/Users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.isLoggedIn = (req,res)=>{        //to check if any token is available on browser (is user logged in)
    const token = req.body.token;
    if(!token){
        res.json({status:false});
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false });
        } else {
            const user = await Users.findById(data.id);
            if (user) return res.json({ status: true, user: user.username });

            else return res.json({ status: false });
        }
    });
}
