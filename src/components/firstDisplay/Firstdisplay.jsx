import React from "react";
import "./firstdisplay.css";

export default function Firstdisplay() {
  return (
    <div className="Firstdisplay">
      <div className="rectangle">
        <div className="rectangle-left">
          <div className="display-text">Wants to be a successful trader?</div>
          <div className="display-text2">
            Learn & trade together with india's #1 <br />
            trusted by over 4500+ Traders
          </div>
          <div className="getstarted">
            <button className="getstarted-btn">Get Started</button>
          </div>
        </div>

        <div className="hero-slide">
         
            <img
              src="https://i.ibb.co/X83wgz6/hero-slide-1-1-1.png"
              alt="hero-slide-1-1-1"
              border="0"
            />
          
        </div>
        <div className="market-container">
          <div className="market-view">
            <div className="mark-img">
              
                <img
                  src="https://i.ibb.co/SN1RCbf/image.png"
                  alt="image"
                  border="0"
                />
              
            </div>
            <div className="mark-text">Market view</div>
          </div>
          <div className="price">
            <div className="price-img-container">
              
                <img className="price-img"
                  src="https://i.ibb.co/vmQbK9d/Whats-App-Image-2022-03-22-at-4-37-1.png"
                  alt="Whats-App-Image-2022-03-22-at-4-37-1"
                  border="0"
                />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
