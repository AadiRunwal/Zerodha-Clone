export default function Footer(){
    return(
        <footer className="border-top">
            <div className="container">
                <br></br>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-2 ms-lg-5 col-sm-10">
                        {/* --- Logo --- */}
                        <img src="./media/logo.svg" alt="Logo" style={{width:"70%"}}></img>
                        <br></br><br></br>
                        <p className="point">&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>
                        {/* --- Social Media --- */}
                        <div className="row social-media">
                            <i class="bi bi-twitter-x col-3"></i>
                            <i class="bi bi-facebook col-3"></i>
                            <i class="bi bi-instagram col-3"></i>
                            <i class="bi bi-linkedin col-3"></i>

                            <i class="bi bi-youtube col-3"></i>
                            <i class="bi bi-whatsapp col-3"></i>
                            <i class="bi bi-telegram col-3"></i>
                        </div>
                        {/* --- Download --- */}
                        <div className="row">
                            <img src="./media/googlePlayBadge.svg" alt="Google Play" className="col-6"></img>
                            <img src="./media/appstoreBadge.svg" alt="App Store" className="col-6"></img>
                        </div>
                        <br></br>
                    </div>
                    <div className="col-lg-2 ms-lg-3 col-sm-3">
                        <h3 className="footer-heading">Account</h3>
                        <p className="footer-point">Open demat account</p>
                        <p className="footer-point">Minor demat account</p>
                        <p className="footer-point">NRI demat account</p>
                        <p className="footer-point">HUF demat account</p>
                        <p className="footer-point">Commodity</p>
                        <p className="footer-point">Dematerialisation</p>
                        <p className="footer-point">Fund transfer</p>
                        <p className="footer-point">MTF</p>
                    </div>
                    <div className="col-lg-2  ms-lg-3 col-sm-3">
                        <h3 className="footer-heading">Support</h3>
                        <p className="footer-point">Contact us</p>
                        <p className="footer-point">Support portal</p>
                        <p className="footer-point">How to file a complaint?</p>
                        <p className="footer-point">Status of your complaints</p>
                        <p className="footer-point">Bulletin</p>
                        <p className="footer-point">Circular</p>
                        <p className="footer-point">Z-Connect blog</p>
                        <p className="footer-point">Downloads</p>
                    </div>
                    <div className="col-lg-2  ms-lg-3 col-sm-3">
                        <h3 className="footer-heading">Company</h3>
                        <p className="footer-point">About</p>
                        <p className="footer-point">Philosophy</p>
                        <p className="footer-point">Press & media</p>
                        <p className="footer-point">Careers</p>
                        <p className="footer-point">Zerodha Cares (CSR)</p>
                        <p className="footer-point">Zerodha.tech</p>
                        <p className="footer-point">Open source</p>
                        <p className="footer-point">Referral program</p>

                    </div>
                    <div className="col-lg-2 ms-lg-3 col-sm-3">
                        <h3 className="footer-heading">Quick Links</h3>
                        <p className="footer-point">Upcoming IPOs</p>
                        <p className="footer-point">Brokerage charges</p>
                        <p className="footer-point">Market holidays</p>
                        <p className="footer-point">Economic calendar</p>
                        <p className="footer-point">Calculators</p>
                        <p className="footer-point">Markets</p>
                        <p className="footer-point">Sectors</p>
                        <p className="footer-point">Gift Nifty</p>
                    </div>
                </div>
                {/* ----- Footer Text ----- */}
                <p className="footer-text">
                    Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: 
                    Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to 
                    <a href=""> complaints@zerodha.com</a>, for DP related to <a href="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className="footer-text">
                    Procedure to file a complaint on <a href="">SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, 
                    E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p className="footer-text">
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p className="footer-text">
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker 
                    / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <p className="footer-text">
                    India's largest broker based on networth as per NSE. <a href="">NSE broker factsheet</a>
                </p>
                <p className="footer-text">
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. 
                    Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process 
                    again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment 
                    in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of 
                    Zerodha and offering such services, please <a href="">create a ticket here</a>.
                </p>
                <p className="footer-text">
                    *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor 
                    grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
                </p>
                <p className="footer-text">
                    Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) 
                    is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. 
                    Fixed deposits are regulated by the Reserve Bank of India (RBI).
                </p>
                <div className="mt-3 text-center">
                    <a href="/" className="footer-link">NSE</a>
                    <a href="/" className="footer-link">BSE</a>
                    <a href="/" className="footer-link">MCX</a>
                    <a href="/" className="footer-link">Terms & conditions</a>
                    <a href="/" className="footer-link">Policies & procedures</a>
                    <a href="/" className="footer-link">Privacy policy</a>
                    <a href="/" className="footer-link">Disclosure</a>
                    <a href="/" className="footer-link">For investor's attention</a>
                    <a href="/" className="footer-link">Investor charter</a>       
                </div>
            </div>
            <br></br>
        </footer>
    )
}