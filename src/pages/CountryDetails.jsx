import React from "react";
import "./CountryDetails.css";
import BackButton from "../components/back-button/BackButton";


function CountryDetails(){

     return (
          <div className="country-details-container">
               <BackButton />
               <h1>Country Details</h1>
          </div>
     )
}


export default CountryDetails;
