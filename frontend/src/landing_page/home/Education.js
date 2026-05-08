export default function Education(){
    return(
        <div className="container">
            <div className="row">
                {/* ----- Left Section ----- */}
                <div className="col-lg-5 col-sm-12 mb-5 m-auto">
                    <img src="./media/education.svg" alt="Education" style={{width:"90%"}}></img>
                </div>
                {/* ----- Right Section ----- */}
                <div className="col-lg-5 col-sm-12 mb-5 m-auto">
                    <h2 className="heading">Free and open market education</h2>
                    <p className="point">
                        Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="" className="text-decoration-none fs-5">varsity <i class="bi bi-arrow-right"></i></a>
                    <br></br><br></br>
                    <p className="point">
                        TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries.
                    </p>
                    <a href="" className="text-decoration-none fs-5">Trading Q&A <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}