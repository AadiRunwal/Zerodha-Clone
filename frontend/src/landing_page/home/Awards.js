export default function Awards(){
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                {/* ----- Left Section ----- */}
                <div className="col-lg-5 col-sm-12 mt-5 mb-5">
                    <img src="./media/largestBroker.svg" alt="Largest Broker" style={{width:"90%"}}></img>
                </div>
                {/* ----- Right Section ----- */}
                <div className="col-lg-5 col-sm-12 mt-5 mb-5">
                    <h2 className="heading mb-3">Largest stock broker in India</h2>
                    <p className="point mb-5">
                        2+ million Zerodha clents contribute to over 15% of all retail 
                        order volumes in India daily by trading and investing in:
                    </p>
                    {/* ----- List ----- */}
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li className="mb-3">Futures and Options</li>
                                <li className="mb-3">Commodity derivatives</li>
                                <li className="mb-3">Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className="mb-3">Stocks & IPOs</li>
                                <li className="mb-3">Direct mutual funds</li>
                                <li className="mb-3">Bonds and ETFs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}