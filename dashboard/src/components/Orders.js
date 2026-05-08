import React, {useState,useEffect}from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders,setOrders] = useState([]);

  useEffect(()=>{                                     //fetching Orders data from below URL (fetches everytime a change is made in database)
    axios.get("https://zerodha-clone-backend-8wvz.onrender.com/allOrders").then((res)=>{
      setOrders(res.data);
    })
  });

  return (
    <>
    {orders.length===0 ?        //display only if Orders length = 0
      <div className="orders">
        <div className="no-orders">
          <p style={{fontSize:"2.5em",margin:"0"}}><i class="bi bi-book"></i></p>
          <p style={{margin:"1em"}}>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div> :
      <>
        <h3 className="title">Orders ({orders.length})</h3>

        <div className="order-table">
          <table>
            <tbody>
              <tr>
                <th>Stock</th>
                <th>Current Price</th>
                <th>Target Price</th>
                <th>Order Qty.</th>
                <th>Mode</th>
              </tr>

              {orders.map((stock,index)=>{

                const cancelOrder = ()=>{     //to send delete request on below URL
                  axios.delete(`https://zerodha-clone-backend-8wvz.onrender.com/delete/${stock._id}`);
                }

                return(
                  <tr>
                    <td>{stock.name}</td>
                    <td>&#8377; {stock.curr_price}</td>
                    <td>&#8377; {stock.target_price}</td>
                    <td>{stock.order_qty}</td>
                    <td className={stock.mode==="BUY"? "profit" : "loss"}>{stock.mode}</td>
                    <td><button onClick={cancelOrder}>cancel</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </>
    }
    </>
  );
};

export default Orders;
