import React, {useState,useEffect} from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const [username, setUsername] = useState("");

  useEffect(()=>{                           //to prevent Users without Login
    const params = new URLSearchParams(window.location.search);
    const tokenFromURL = params.get("token");         //extracting token from URL

    if(tokenFromURL){
      localStorage.setItem("token",tokenFromURL);           //storing tokenFromURL in LocalStorage
      window.history.replaceState({},document.title,"/");   //removing token from URL
    }

    const token = localStorage.getItem("token");
    if(!token){
      window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
      return;
    }
      
    verifyUser(token);
  },[]);

  const verifyUser = async (token)=>{
    try{
        const { data } = await axios.post("https://zerodha-clone-backend-8wvz.onrender.com", {token});
        
        const { status, user } = data;
        if(status){
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        }else{
          localStorage.removeItem("token"); 
          window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
        }
      
      }catch(err){
        console.error(err);
        localStorage.removeItem("token");
        window.location.href="https://zerodha-clone-uqzt.onrender.com/login";
      }
    };

  return (
    <>
      <TopBar username={username}/>
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
