import { useState } from "react";
import axios from "axios";

export default function BuyAction({handleCancel,stockOrder,setShowAlert}){
    const [price,setPrice] = useState(stockOrder.price);
    const [qty,setQty] = useState(1);

    const handlePrice = (e)=>{
        setPrice(e.target.value);
    }
    const handleQty = (e)=>{
        setQty(e.target.value);
    }

    const confirmBuy = ()=>{        //Sending Order data on below URL
        axios.post("http://localhost:8080/newOrder",{
            name : stockOrder.name,
            curr_price: stockOrder.price,
            target_price : price,
            order_qty : qty,
            mode : "BUY"
        });
        handleCancel();
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false);
        },2000);
    }

    return(
        <div className="buy-sellAction" draggable={true}>
            <h2 style={{textAlign:"center"}}>--- Buy ---</h2>
            <h3 style={{fontWeight:"normal",textAlign:"center"}}>{stockOrder.name} - (&#8377; {stockOrder.price})</h3>
            <hr></hr>
            <div className="inputfield">
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value={price} onChange={handlePrice}></input>
            </div>
            
            <div className="inputfield">
                <label htmlFor="quantity">Quantity: </label>
                <input type="number" id="quantity" name="quantity" value={qty} onChange={handleQty}></input>
            </div>
            <div className="buy-sellButtons">
                <button className="cancel" onClick={handleCancel}>Cancel</button>
                <button className="buy btn" onClick={confirmBuy}>Buy</button>
            </div>
        </div>
    )
}