export default function Team(){
    return(
        <div className="container">
            <h3 className="text-center fs-3 mb-5">People</h3>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-lg-4 col-sm-8 mt-3 text-center">
                    <img src="./media/myphoto.jpg" style={{width:"75%",borderRadius:"50%"}}></img>
                    <p className="fs-5 fw-medium mt-4">Aadi Runwal</p>
                    <p className="text-muted">Founder,CEO<br></br>(Not yet)</p>
                </div>
                <div className="col-lg-5 col-sm-10 mt-5" style={{lineHeight:1.8}}>
                    <p>
                        Aadi bootstrapped and founded Zerodha in 2010 to overcome the 
                        hurdles he faced during his decade long stint as a trader. 
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee 
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing badminton is his zen.
                    </p>
                    <p>
                        Connect on <a href="">LinkedIn</a> / TradingQnA / <a href="">Instagram</a>
                    </p>
                </div>
            </div>
            <br></br>
        </div>
    )
}