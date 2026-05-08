import{useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

export default function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleError = (err)=>
        toast.error(err,{
            position: "bottom-left",
        });
    const handleSuccess = (msg)=>
        toast.success(msg,{
            position: "bottom-left",
        });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:8080/login",{
                email: email,
                password: password,
            },
            { withCredentials: true });

            const {success,message} = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                window.location.href="http://localhost:3001/";      //to load the following URL
                }, 1000);
            } else {
                handleError(message);
            }
        }catch(err){
            console.error(err);
        }
        
        setEmail("");
        setPassword("");
    }

    return(
        <div className="container my-5" style={{display:"flex",flexWrap:"wrap"}}>
            <form className=" row col-lg-6 col-sm-10 m-auto my-4" onSubmit={handleSubmit}>

                <h2 className="text-center mt-4 mb-5 fs- text-muted">--- Login ---</h2>
                {/*----- Email -----*/}
                <div class="form-floating my-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email" required 
                    name="email" value={email} onChange={handleEmail}/>
                    <label htmlFor="floatingInput" className="ms-2">Email address</label>
                </div>
                {/*----- Password -----*/}
                <div class="form-floating my-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required 
                    name="password" value={password} onChange={handlePassword}/>
                    <label htmlFor="floatingPassword" className="ms-2">Password</label>
                </div>
            
                <button type="submit" class="btn btn-primary my-3 ms-3 col-3">Submit</button>
            </form>
            <div className="row col-lg-8 col-sm-6 text-center mt-2">
                <p className="fs-5">Not a user? <Link to={"/Signup"}>Signup</Link></p>
            </div>
            <ToastContainer />
        </div>
    )
}