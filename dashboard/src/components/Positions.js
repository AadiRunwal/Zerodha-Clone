import React, {useState, useEffect} from "react";
// import { positions } from "../data/data";     //----- Positions data [Local] -----
import axios from "axios";

const Positions = () => {

  const [positions, setPositions] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/allPositions").then((res)=>{
      setPositions(res.data);
    })
  },[]);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock,index)=>{
              let curValue = stock.price * stock.qty;
              let isProfit = curValue - stock.avg*stock.qty >= 0.0;
              let profClass = isProfit ? "profit" : "loss";
              let dayClass = stock.isLoss ? "loss" : "profit";
  
              return(
                <tr>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td className={profClass}>{(curValue - stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              )
            })}
        </table>
      </div>
    </>
  );
};

export default Positions;
