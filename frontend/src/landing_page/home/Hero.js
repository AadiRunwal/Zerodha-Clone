import { Link } from "react-router-dom";

export default function Hero(){
    return(
        <div className="container mt-5">
            <div className="row col-8 m-auto">
                <img src="./media/homeHero.png" alt="Hero"></img>
            </div>
            
            <div className="text-center m-5">
                <h2 className="mt-5">Invest in everything</h2>
                <p className="mt-3 fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to={"/Signup"}><button className="btn btn-primary mt-4 mb-5 ps-4 pe-4 fs-5 fw-medium">Sign up for free</button></Link>
            </div>
        </div>
    )
}