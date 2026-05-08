import React,{useState} from "react";
import {TrendingUp,TrendingDown, MoreHoriz, BarChart} from '@mui/icons-material';
import {Tooltip} from "@mui/material";
import { watchlist } from "../data/data";       //----- Watchlist data -----

const WatchList = ({handleBuy,handleSell,setStockOrder}) => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
            <WatchlistItem stock={stock} index={index} handleBuy={handleBuy} handleSell={handleSell} setStockOrder={setStockOrder}/>
          )
        })}
      </ul>
      <div className="chart">
      </div>
    </div>
  );
};

export default WatchList;

function WatchlistItem({stock,index,handleBuy,handleSell,setStockOrder}){                  //-------- Adding Watchlist Items as List --------
  const [showWatchlistActions,setShowWatchlistActions] = useState(false);     //for hovering effect on list-item

  let handleMouseEnter = ()=>{
    setShowWatchlistActions(true);
  }
  let handleMouseExit = ()=>{
    setShowWatchlistActions(false);
  }

  let setStock = ()=>{    //setting Stock Values for Order
    setStockOrder({
      name: stock.name,
      price: stock.price,
    });
  }

  return(
    <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="price">&#8377; {stock.price}</span>
          {stock.isDown ? <TrendingDown className="down"/> : <TrendingUp className="up"/>}
          <span className={stock.isDown?"down":"up"}>{stock.percent}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions handleBuy={handleBuy} handleSell={handleSell} setStock={setStock}/>}
    </li>
  )
}

function WatchListActions({handleBuy,handleSell,setStock}){
  return(
    <span className="actions">
      <span style={{display:"flex"}}>
        {/* <p>{uuid}</p> */}
        <Tooltip title="Buy Stock" placement="top" arrow>
          <button className="buy" onClick={()=>{handleBuy();setStock();}}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell Stock" placement="top" arrow>
          <button className="sell" onClick={()=>{handleSell();setStock();}}>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow>
          <button className="icon"><BarChart /></button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow>
          <button className="icon"><MoreHoriz /></button>
        </Tooltip>
      </span>
    </span>
  )
}




