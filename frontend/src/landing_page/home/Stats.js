export default function Stats(){
    return(
        <div className="container mt-5 mb-5">
            {/* ----- Left Section ----- */}
            <div className="row mb-4">
                <div className="col-lg-4 col-sm-12 m-auto mb-4">
                    <h2 className="heading">Trust with confidence</h2>
                    <h3 className="subHeading">Customer-first always</h3>
                    <p className="point">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 
                        lakh crores of equity investments, making us India’s 
                        largest broker; contributing to 15% of daily 
                        retail exchange volumes in India.
                    </p>
                    <h3 className="subHeading">No spam or gimmicks</h3>
                    <p className="point">
                        No gimmicks, spam, "gamification", or annoying push 
                        notifications. High quality apps that you use at your 
                        pace, the way you like. Our philosophies.
                    </p>                    
                    <h3 className="subHeading">The Zerodha universe</h3>
                    <p className="point">
                        Not just an app, but a whole ecosystem. Our investments 
                        in 30+ fintech startups offer you tailored services 
                        specific to your needs.
                    </p>
                    <h3 className="subHeading">Do better with money</h3>
                    <p className="point">
                        With initiatives like Nudge and Kill Switch, we don't just 
                        facilitate transactions, but actively help you do better 
                        with your money.
                    </p>
                </div>
                {/* ----- Right Section ----- */}
                <div className="col-lg-6 col-sm-12 mb-4">
                    <img src="./media/ecosystem.png" alt="Ecosystem" style={{width:"90%"}}></img>
                    <div className="row mt-5">
                        <a href="#" className="col-6 text-center text-decoration-none">Explore our products <i class="bi bi-arrow-right"></i></a>
                        <a href="#" className="col-6 text-start text-decoration-none">Try kite demo <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row col-7 m-auto mb-5">
                <img src="./media/pressLogos.png" alt="press Logos"></img>
            </div>
            <br></br>
        </div>
    )
}