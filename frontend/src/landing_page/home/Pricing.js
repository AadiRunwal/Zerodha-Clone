export default function Pricing(){
    return(
        <div className="container mb-lg-5">    
            <div className="row">       
                {/* ----- Left Sectioon ----- */}
                <div className="col-lg-4 col-sm-12 m-auto mb-4">
                    <h2 className="heading">Unbeatable pricing</h2>
                    <p className="point">
                        We pioneered the concept of discount broking and price 
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="#" className="text-decoration-none">See pricing <i class="bi bi-arrow-right"></i></a>
                </div>
                {/* ----- Right Section ----- */}
                <div className="col-lg-7 col-sm-12 mb-4" style={{alignContent:"center"}}>
                    <div className="row">
                        <div className="col-4 d-flex align-items-center">
                            <img src="./media/pricing0.svg" alt="Pricing" style={{width:"60%"}}></img>
                            <p style={{fontSize:"0.7em"}}>Free account opening</p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <img src="./media/pricing0.svg" alt="Pricing" style={{width:"60%"}}></img>
                            <p style={{fontSize:"0.7em"}}>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <img src="./media/intradayTrades.svg" alt="Pricing" style={{width:"60%"}}></img>
                            <p style={{fontSize:"0.7em"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}