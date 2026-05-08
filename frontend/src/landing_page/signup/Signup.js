import {useState} from "react";
import {Link,} from "react-router-dom";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

export default function Signup(){

    const [inputValue,setInputValue] = useState({
        email: "",
        username: "",
        password: ""
    });

    const{email,username,password} = inputValue;
    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setInputValue({
            ...inputValue, [name]: value,
        })
    }

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post("https://zerodha-clone-backend-8wvz.onrender.com/signup",{...inputValue},{ withCredentials: true });
            const {success,message} = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                window.location.href="https://zerodha-clonedashboard.netlify.app/";      //to load the following URL
                }, 1000);
            } else {
                handleError(message);
            }
        }catch(err){
            console.error(err);
        }
        
        setInputValue({
            email: "",
            username: "",
            password: ""        
        });
    }

    return(
        <div className="container my-5" style={{display:"flex",flexWrap:"wrap"}}>
            <form className="row col-lg-6 col-sm-10 m-auto my-4" onSubmit={handleSubmit}>

                <h2 className="text-center mt-4 mb-5 fs- text-muted">--- Signup ---</h2>
                {/*----- Email -----*/}
                <div className="form-floating my-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter Email" required 
                    name="email" value={email} onChange={handleOnChange} />
                    <label htmlFor="floatingInput" className="ms-2">Email address</label>
                </div>
                {/*----- Username -----*/}
                <div className="form-floating my-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Username" required
                    name="username" value={username} onChange={handleOnChange} />
                    <label htmlFor="floatingInput" className="ms-2">Username</label>
                </div>
                {/*----- Password -----*/}
                <div className="form-floating my-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                    name="password" value={password} onChange={handleOnChange} />
                    <label htmlFor="floatingPassword" className="ms-2">Password</label>
                </div>
            
                <button type="submit" className="btn btn-primary my-3 ms-3 col-3">Submit</button>
            </form>
            <div className="row col-lg-8 col-sm-6 text-center mt-2">
                <p className="fs-5">Already a user? <Link to={"/Login"}>Login</Link></p>
            </div>
            <ToastContainer />
        </div>
        
    );
}
