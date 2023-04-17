import React, { useContext } from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";


function BackButton(props){
     const navigate = useNavigate();

     const  { selectedRegion, setSelectedRegion} = useContext(SelectRegionContext)

     function handleClick(){
          setSelectedRegion("Filter by Region");
          navigate("/");
     }

     return(
          <div className="back-button-container">
               <button onClick={handleClick} className={`${props.theme === "light" ? "back-button" : "back-button back-button-dark-mode"}`} >
                    <img className={`${props.theme === "dark" ? "button-image-dark" : ""}`} src="../public/left-arrow.png" alt="" />
                    Back
               </button>
          </div>
     )
}

export default BackButton;