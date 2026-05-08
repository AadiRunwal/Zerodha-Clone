export default function Hero(){
    return(
        <div className="container mt-5">
            <br></br>
            <h3 className="text-center fs-2 mb-3 text-muted">Charges</h3>
            <p className="text-center fs-5 fw-medium mb-5" style={{opacity:0.5}}>List of all charges and taxes</p>
            <div className="row text-center justify-content-center p-5 m-auto">
                <div className="col-lg-4 col-sm-8">
                    <img src="./media/pricing0.svg" alt="Pricing" style={{width:"65%"}}></img>
                    <h3 className="mt-3 mb-3">Free equity delivery</h3>
                    <p className="" style={{opacity:0.7,lineHeight:1.6,fontSize:"1.1em"}}>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-8">
                    <img src="./media/intradayTrades.svg" alt="Pricing" style={{width:"65%"}}></img>
                    <h3 className="mt-3 mb-3">Intraday and F&O trades</h3>
                    <p className="" style={{opacity:0.7,lineHeight:1.8,fontSize:"1.1em"}}>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across 
                        equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-8">
                    <img src="./media/pricing0.svg" alt="Pricing" style={{width:"65%"}}></img>
                    <h3 className="mt-3 mb-3">Free direct MF</h3>
                    <p className="" style={{opacity:0.7,lineHeight:1.6,fontSize:"1.1em"}}>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}