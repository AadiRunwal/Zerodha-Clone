export default function CreateTicket(){
    return(
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                {/* --------- Left Section[Dropdowns] ---------*/}
                <div className="col-lg-8 col-sm-12">
                    {/* ----- First Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown">
                           <i class="bi bi-plus-circle"></i> Account Opening 
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>Resident individual</li></a>
                            <a class="dropdown-item" href="#"><li>Minor</li></a>
                            <a class="dropdown-item" href="#"><li>Non Resident Indian (NRI)</li></a>
                            <a class="dropdown-item" href="#"><li>Company, Partnership, HUF and LLP</li></a>
                            <a class="dropdown-item" href="#"><li>Glossary</li></a>
                        </ul>
                    </div>
                    {/* ----- Second Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-person-circle"></i> Your Zerodha Account
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>Your Profile</li></a>
                            <a class="dropdown-item" href="#"><li>Account modification</li></a>
                            <a class="dropdown-item" href="#"><li>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                            <a class="dropdown-item" href="#"><li>Nomination</li></a>
                            <a class="dropdown-item" href="#"><li>Transfer and conversion of securities</li></a>
                        </ul>
                    </div>
                    {/* ----- Third Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-rewind-circle"></i> Kite
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>IPO</li></a>
                            <a class="dropdown-item" href="#"><li>Trading FAQs</li></a>
                            <a class="dropdown-item" href="#"><li>Margin Trading Facility (MTF) and Margins</li></a>
                            <a class="dropdown-item" href="#"><li>Charts and orders</li></a>
                            <a class="dropdown-item" href="#"><li>Alerts and Nudges</li></a>
                            <a class="dropdown-item" href="#"><li>General</li></a>
                        </ul>
                    </div>
                    {/* ----- Fourth Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-currency-rupee"></i> Funds
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>Add money</li></a>
                            <a class="dropdown-item" href="#"><li>Withdraw money</li></a>
                            <a class="dropdown-item" href="#"><li>Add bank accounts</li></a>
                            <a class="dropdown-item" href="#"><li>eMandates</li></a>
                        </ul>
                    </div>
                    {/* ----- Fifth Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-opencollective"></i> Console
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>Portfolio</li></a>
                            <a class="dropdown-item" href="#"><li>Corporate actions</li></a>
                        <a class="dropdown-item" href="#"><li>Funds statement</li></a>
                        <a class="dropdown-item" href="#"><li>Reports</li></a>
                        <a class="dropdown-item" href="#"><li>Profile</li></a>
                        <a class="dropdown-item" href="#"><li>Segments</li></a>
                        </ul>
                    </div>
                    {/* ----- Sixth Dropdown ----- */}
                    <div class="dropdown">
                        <button class="btn dropdown-toggle dropDown border" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-dash-circle"></i> Coin
                        </button>
                        <ul class="dropdown-menu" style={{width:"100%"}}>
                            <a class="dropdown-item" href="#"><li>Mutual funds</li></a>
                            <a class="dropdown-item" href="#"><li>National Pension Scheme (NPS)</li></a>
                            <a class="dropdown-item" href="#"><li>Fixed Deposit (FD)</li></a>
                            <a class="dropdown-item" href="#"><li>Features on Coin</li></a>
                            <a class="dropdown-item" href="#"><li>Payments and Orders</li></a>
                            <a class="dropdown-item" href="#"><li>General</li></a>
                        </ul>
                    </div>
                </div>
                {/* ---------- Right Section ---------- */}
                <div className="col-lg-4 col-sm-10">
                    <div className="m-3 me-4 mb-4 p-2" style={{borderLeft:"0.6em solid #ff9100",backgroundColor:"#fff4e5"}}>
                        <ul>
                            <a href="" className="text-decoration-underline fw-normal"><li className="mt-3 mb-4">Adjustment of F&O contracts of OFSS due to dividend</li></a>
                            <a href="" className="text-decoration-underline fw-normal"><li className="mt-3 mb-4">Rights Entitlements listing in April 2026</li></a>
                        </ul>
                    </div>
                    <div className="m-2 ms-3 border">
                        <p className="fw-medium border bg-body-secondary p-2">Quick Links</p>
                        <p className="border-bottom ps-3 pb-3"><a href="">1. Track account opening</a></p>
                        <p className="border-bottom ps-3 pb-3"><a href="">2. Track segment activation</a></p>
                        <p className="border-bottom ps-3 pb-3"><a href="">3. Intraday margins</a></p>
                        <p className="border-bottom ps-3 pb-3"><a href="">4. Kite user manual</a></p>
                        <p className="ps-3"><a href="">5. Learn how to create a ticket</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}