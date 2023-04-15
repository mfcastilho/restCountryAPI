import React, { useContext } from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";


function BackButton(){
     const navigate = useNavigate();

     const  { selectedRegion, setSelectedRegion} = useContext(SelectRegionContext)

     function BackButton(){
          setSelectedRegion("Filter by Region");
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