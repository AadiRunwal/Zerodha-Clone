export default function LeftSection({imageSrc,title,description,tryDemo,learnMore,googlePlay,appStore}){
    return(
        <div className="container mb-5 mt-5">
            <br></br>
            <div className="row justify-content-center align-items-center m-auto">
                <div className="col-lg-6 col-sm-8 mb-4">
                    <img src={imageSrc} alt={title} style={{width:"90%"}}></img>
                </div>
                <div className="col-lg-4 col-sm-8 ms-5 p-4">
                    <h2 className="fs-4 text-muted mb-4">{title}</h2>
                    <p className="point">{description}</p>
                    <div className="col-8 d-flex justify-content-between mb-4">
                        <a href={tryDemo}>Try demo &nbsp;<i class="bi bi-arrow-right"></i></a>
                        <a href={learnMore}>Learn more &nbsp;<i class="bi bi-arrow-right"></i></a>
                    </div>
                    <div className="col-10 d-flex">
                        <a href={googlePlay} className="me-4"><img src="./media/googlePlayBadge.svg" alt="Google Play" style={{width:"110%"}}></img></a>
                        <a href={appStore} className="ms-4"><img src="./media/appstoreBadge.svg" alt="App Store" style={{width:"110%"}}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}