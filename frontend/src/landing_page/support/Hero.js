export default function Hero(){
    return(
        <div className="" style={{backgroundColor:"rgb(240,240,240)"}}>
            <div className="container p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="fs-1 mt-2 mb-4">Support Portal</h1>
                    <button className="btn ps-4 pe-4 fs-6 fw-medium" style={{height:"50%"}}>My tickets</button>
                </div>
                <input placeholder="Eg: How do i open my account" style={{width:"100%",padding:"1em 1.5em"}} className="mt-2 mb-4 border rounded-1"></input>
            </div>
        </div>
    )
}