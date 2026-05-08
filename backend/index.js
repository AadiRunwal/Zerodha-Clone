require("dotenv").config();         //to access environment variables from .env

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const AuthenticationRoute = require("./Routes/AuthenticationRoute");
const Holdings = require("./models/Holdings");
const Positions = require("./models/Positions");
const Orders = require("./models/Orders"); 

const Port = process.env.PORT || 8080;
const Mongo_URL = process.env.MONGO_URL;

app.use(cors({                              //----- Middlewares -----
    origin: [`https://zerodha-clone-uqzt.onrender.com`,`https://zerodha-clone-dashboard-mscp.onrender.com`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));                
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

// ----- Database Connection -----
main().then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(Mongo_URL);
}

// ----- Server Connection -----
app.listen(Port,()=>{
    console.log(`Port Active : ${Port}`);
});

// ----- Authenticating Users -----
app.use("/",AuthenticationRoute);

// ----- Holdings -----
app.get("/allHoldings",async (req,res)=>{       //Sending Holdings Data
    let allHoldings = await Holdings.find({});
    res.json(allHoldings);
});

// ----- Positions -----
app.get("/allPositions",async (req,res)=>{      //Sending Positions Data
    let allPositions = await Positions.find({});
    res.json(allPositions);
});

// ----- Orders -----
app.get("/allOrders",async (req,res)=>{      //Showing all Orders
    let allOrders = await Orders.find({});
    res.json(allOrders);
})

app.post("/newOrder",async (req,res)=>{     //Creating New Order in Database
    let newOrder = new Orders({
        name: req.body.name,
        curr_price: req.body.curr_price,
        target_price: req.body.target_price,
        order_qty: req.body.order_qty,
        mode: req.body.mode
    });
    newOrder.save();
});

app.delete("/delete/:id",async (req,res)=>{     //Deleting Order from Database
    let {id} = req.params;
    let deletedOrder = await Orders.findByIdAndDelete(id);
    console.log(deletedOrder);
});
