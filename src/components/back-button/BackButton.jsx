import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";


function BackButton(){
     const navigate = useNavigate();

     function BackButton(){
          navigate("/");
     }

     return(
          <div className="back-button-container">
               <button onClick={BackButton} className="back-button">
                    <img src="../public/left-arrow.png" alt="" />
                    Back
               </button>
          </div>
     )
}

export default BackButton;