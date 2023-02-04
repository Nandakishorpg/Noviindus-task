import React from "react";
import Firstdisplay from "../../components/firstDisplay/Firstdisplay";
import Navbar from "../../components/navbar/Navbar";
import './home.css'

export default function Home() {
  return (
    <div>
       <div className="first-home">

       <Navbar />

       </div>
       <div className="second-home">
        <Firstdisplay/>
       </div>
       
   
      
    </div>
  );
}
