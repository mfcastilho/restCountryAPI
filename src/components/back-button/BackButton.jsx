import React from "react";
import "./BackButton.css";

function BackButton(){

     return(
          <div className="back-button-container">
               <button className="back-button">
                    <img src="../public/left-arrow.png" alt="" />
                    Back
               </button>
          </div>
     )
}

export default BackButton;