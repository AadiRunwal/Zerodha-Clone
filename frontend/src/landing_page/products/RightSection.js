export default function RightSection({title,description,link,linkTitle,imageSrc}){
    return(
        <div className="container mb-5 mt-5">
            <br></br>
            <div className="row justify-content-center align-items-center m-auto">
                <div className="col-lg-4 col-sm-8 me-lg-5 ms-sm-5 p-4">
                    <h2 className="fs-4 text-muted mb-4">{title}</h2>
                    <p className="point">{description}</p>
                    <a href={link}>{linkTitle} &nbsp;<i class="bi bi-arrow-right"></i></a>
                </div>
                <div className="col-lg-6 col-sm-8 mb-4">
                    <img src={imageSrc} alt={title} style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    )
}