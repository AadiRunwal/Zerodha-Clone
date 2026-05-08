import React, {useState,useEffect} from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(()=>{                           //to prevent Users without Login
    const verifyCookie = async ()=>{
      if(!cookies.token){
        window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
        return;
      }
      try{
        const { data } = await axios.post("https://zerodha-clone-backend-8wvz.onrender.com", {}, { withCredentials: true });
        
        const { status, user } = data;
        if(status){
          setUsername(user);
          toast(`Hello ${user}`, {
          position: "top-right",
        });
        }else{
          removeCookie("token"); 
          window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
        }
      }catch(err){
        console.error(err);
        window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
      }
    };
    verifyCookie();
  },[cookies, removeCookie]);
  console.log(cookies);

  return (
    <>
      <TopBar username={username}/>
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
