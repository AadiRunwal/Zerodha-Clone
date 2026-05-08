export default function Hero(){
    return(
        <div className="container mt-5">
            <br></br>
            <h3 className="text-center fs-4">
                We pioneered the discount broking model in India.<br></br>
                Now, we are breaking ground with our technology.
            </h3>
            <br></br>
            <br></br>
            {/* --------- */}
            <div className="row border-top justify-content-center m-auto mt-5">
                <div className="col-lg-4 col-sm-8 mt-5 mb-lg-5 me-1">
                    <p className="mt-5" style={{lineHeight:1.8}}>
                        We kick-started operations on the 15th of August, 2010 
                        with the goal of breaking all barriers that traders and 
                        investors face in India in terms of cost, support, and technology. 
                        We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className="" style={{lineHeight:1.8}}>
                        Today, our disruptive pricing models and in-house 
                        technology have made us the biggest stock broker in India.
                    </p>
                    <p className="mb-5" style={{lineHeight:1.8}}>
                        Over 1.6+ crore clients place billions of orders every year 
                        through our powerful ecosystem of investment platforms, 
                        contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-8 mt-lg-5 mb-5 ms-1">
                    <p className="mt-5" style={{lineHeight:1.8}}>
                        In addition, we run a number of popular open online educational 
                        and community initiatives to empower retail traders and investors.
                    </p>
                    <p className="" style={{lineHeight:1.8}}>
                        Rainmatter, our fintech fund and incubator, has invested in several 
                        fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className="mb-5" style={{lineHeight:1.8}}>
                        And yet, we are always up to something new every day. Catch up on the 
                        latest updates on our blog or see what the media is saying about us or 
                        learn more about our business and product philosophies.
                    </p>
                </div>
            </div>
        </div>
    )
}