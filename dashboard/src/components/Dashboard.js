import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";    //----- to fetch Data from API -----

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import BuyAction from "./BuyAction";
import SellAction from "./SellAction";
// import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {

//---------------------------------------------- Watchlist -------------------------------------------------------

  const [showBuyAction,setShowBuyAction] = useState(false);       //----- to handle Buy & Sell -----
  const [showSellAction,setShowSellAction] = useState(false);
  const [stockOrder,setStockOrder] = useState();                  // current stock object for Order (Buy/Sell)
  const [showAlert,setShowAlert] = useState(false);           //----- to send Alert -----

  const handleBuy = ()=>{
    setShowBuyAction(true);
    setShowSellAction(false);
  }
  const handleSell = ()=>{
    setShowSellAction(true);
    setShowBuyAction(false);
  }
  const handleCancel = ()=>{
    setShowBuyAction(false);
    setShowSellAction(false);
  }
  
//---------------------------------------------- Holdings -------------------------------------------------------

  const [holdings,setHoldings] = useState([]);

  useEffect(()=>{       //fetching holdings data from the below URL
    axios.get("http://localhost:8080/allHoldings").then((res)=>{
      setHoldings(res.data);
    });
  },[]);

  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
        <WatchList handleBuy={handleBuy} handleSell={handleSell} setStockOrder={setStockOrder}/>
        {showBuyAction && <BuyAction handleCancel={handleCancel} stockOrder={stockOrder} setShowAlert={setShowAlert}/>}
        {showSellAction && <SellAction handleCancel={handleCancel} stockOrder={stockOrder} setShowAlert={setShowAlert}/>}
      {/* </GeneralContextProvider> */}
      <div className="content">
        {showAlert && <h4 className="Alert">Order Placed Successfully</h4>}
        <Routes>
          <Route exact path="/" element={<Summary holdings={holdings} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings holdings={holdings} />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
