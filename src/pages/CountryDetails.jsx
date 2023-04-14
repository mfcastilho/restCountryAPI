import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import BackButton from "../components/back-button/BackButton";
import { useLocation } from "react-router-dom";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

function CountryDetails(){

     const location = useLocation();
     const countryName = location.state.countryName;
     const [country, setCountry] = useState(null);

     async function getCountryInfos(){
          try {
               
               const name = countryName.toLowerCase();
               console.log(name)
               const response = await axios.get(`${baseURL}/name/${name}`);
               console.log(response.data);
               response.data.forEach(country=>{
                    console.log(country)
               })
               setCountry(response.data);

          } catch (error) {
               console.log(error.data.message);
          }
     }

     useEffect(()=>{
          getCountryInfos();
     },[])

     return (
          <div className="country-details-container">
               <BackButton />

               
               <div className="country-flag-and-infos-container">
                    <img src="../public/Flag_of_Brazil.svg.webp" alt="" />
                    <div className="country-infos-box">

                         <h4>Brazil</h4>
                         <div className="wrapper-country-infos-box-parts">
                              
                              <div className="country-infos-box-left-part">
                                   
                                   <div className="hugging-elements">
                                        <strong className="info-label">Native Name: </strong>
                                        <span className="country-info">Brasil</span>
                                   </div>

                                   <div className="hugging-elements">
                                        <strong className="info-label">Population: </strong>
                                        <span className="country-info">210223456</span>
                                   </div>
                                   <div className="hugging-elements">
                                        <strong className="info-label">Region: </strong>
                                        <span className="country-info">Americas</span>
                                   </div>
                                   <div className="hugging-elements">
                                        <strong className="info-label">Sub Region: </strong>
                                        <span className="country-info">South America</span>
                                   </div>
                                   <div className="hugging-elements">
                                        <strong className="info-label">Capital: </strong>
                                        <span className="country-info">Brasília</span>  
                                   </div>
         
                              </div>

                              <div className="country-infos-box-right-part">

                                   <div className="hugging-elements">
                                        <strong className="info-label">Top Level Domain: </strong>
                                        <span className="country-info">.br</span>
                                   </div>

                                   <div className="hugging-elements">
                                        <strong className="info-label">Currencies: </strong>
                                        <span className="country-info">BRL</span>
                                   </div>

                                   <div className="hugging-elements">
                                        <strong className="info-label">Languages: </strong>
                                        <span className="country-info">Portuguese</span>
                                   </div>
   
                              </div>
                         </div>
                         
                         
                         <div className="country-infos-box-bottom-part">
                         <strong className="border-countries">Border Countries: </strong>
                         <span className="border-country-name">Argentina</span>
                         <span className="border-country-name">Uruguai</span>
                         <span className="border-country-name">Paraguai</span>
                         </div>
                    </div>
               </div>
          </div>
     )
}


export default CountryDetails;
