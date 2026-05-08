import { Link } from "react-router-dom";

export default function OpenAccount(){
    return(
        <div className="container text-center mt-5 mb-5">
            <h2 className="heading mb-3">Open a Zerodha account</h2>
            <p className="point mb-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to={"/Signup"}><button className="btn btn-primary mt-4 ps-4 pe-4 fs-5 fw-medium">Sign up for free</button></Link>
            <br></br>
            <br></br>
        </div>
    )
}