import {Link} from "react-router-dom";      //to link Routes

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg sticky-top border-bottom bg-white p-3 ">
            <div class="container-fluid justify-content-center">
                {/* ----- Brand Name ----- */}
                <div className="row justify-content-between">
                    <Link class="navbar-brand col-4" to="/"><img src="./media/logo.svg" style={{width:"80%"}}></img></Link>
                    <button class="navbar-toggler col-2 col-sm-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                {/* ----- Nav Links ----- */}
                <div className="row">
                    <div class="collapse navbar-collapse col-8" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/Signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Support">Support</Link>
                            </li>
                            <i class="bi bi-list fs-3"></i>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}