import { Link } from "react-router-dom";

export default function Universe(){
    return(
        <div className="container mb-5">
            <br></br>
            <h2 className="fs-4 mb-4 text-center">The Zerodha Universe</h2>
            <p className="mb-5 text-center">Extend your trading and investment experience even further with our partner platforms</p>
            <br></br>
            <div className="row mb-5 m-auto justify-content-center text-center">
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/zerodhaFundhouse.png" alt="" style={{width:"65%"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/sensibullLogo.svg" alt="" style={{width:"75%",marginBottom:"0.5em"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/goldenpiLogo.png" alt="" style={{width:"65%"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                </div>
            </div>
            <div className="row mb-5 m-auto justify-content-center text-center">
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/streakLogo.png" alt="" style={{width:"60%"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/smallcaseLogo.png" alt="" style={{width:"70%"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className="col-lg-3 col-sm-8 p-2 m-2">
                    <img src="./media/dittoLogo.png" alt="" style={{width:"50%"}}></img>
                    <p className="fw-medium lh-base m-4" style={{opacity:0.5,fontSize:"0.8em"}}>
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                        Sign up for free
                    </p>
                </div>
            </div>
            <div className="mb-5 text-center">
                <Link to={"/Signup"}><button className="btn btn-primary mb-5 ps-4 pe-4 fs-5 fw-medium">Sign up for free</button></Link>
            </div>
        </div>
    )
}