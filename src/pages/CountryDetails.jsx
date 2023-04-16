import React, { useContext, useEffect, useState } from "react";
import "./CountryDetails.css";
import BackButton from "../components/back-button/BackButton";
import { useLocation } from "react-router-dom";
import axios from "axios";


const baseURL = "https://restcountries.com/v3.1";

function CountryDetails(props){

     const location = useLocation();
     let countryName = location.state.countryName;
     console.log(countryName);
     const [country, setCountry] = useState([]);
     const [countriesBorder, setCountriesBorder] = useState([]);

   

     async function getCountryInfos(){
          try {
               
               const name = countryName.toLowerCase();
               const response = await axios.get(`${baseURL}/name/${name}`);
               setCountry(response.data);
               

          } catch (error) {
               setResultSearchCountry(false);
               console.log(error.message);
          }
     }

     async function goToCountryBorderSelected(e){
          countryName = e.currentTarget.getAttribute("data-name");
          try {
               
               const name = countryName.toLowerCase();
               const response = await axios.get(`${baseURL}/name/${name}`);
               setCountry(response.data);
               getCountryBorders();

          } catch (error) {
               console.log(error.message);
          }
          
     }

     async function getCountryBorders(){
          try {
               
               const name = countryName.toLowerCase();
               const response = await axios.get(`${baseURL}/name/${name}?fullText=true`);
               const country = response.data[0];
               

               const promisses = country.borders.map(async (border) => {
                    const response = await axios.get(`${baseURL}/alpha/${border}`);
                    const data = await response.data;
                    // console.log(data[0].name);
                    
                    return data[0].name;
               })

               const countryBorders = await Promise.all(promisses);
               setCountriesBorder(countryBorders);
               
          } catch (error) {
               console.log(error.message);
          }
     }

     useEffect(()=>{
          getCountryInfos();
          getCountryBorders();
          
     },[])


     return (
          <div className="country-details-container">
               <BackButton theme={props.theme} />

               {country.length > 0 ? (

                    country.map((country, index) => (
                         <div key={index} className="country-flag-and-infos-container">
                         <img className={`${props.theme === "light" ? "country-flag-image" : "country-flag-image country-flag-image-dak-mode"}`} src={country.flags.svg} alt="" />
                         <div className="country-infos-box">

                              <h4 className={`${props.theme === "light" ? "country-name-title" : "country-name-title country-name-title-dark-mode"}`} >{country.name.common}</h4>
                              <div className="wrapper-country-infos-box-parts">
                                   
                                   <div className="country-infos-box-left-part">
                                        
                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`} >Native Name: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`} >{country.name.nativeName[Object.keys(country?.name?.nativeName)[0]].common}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Population: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country.population}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Region: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country.region}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Sub Region: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country.subregion}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Capital: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country.capital}</span>  
                                        </div>
          
                                   </div>

                                   <div className="country-infos-box-right-part">

                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Top Level Domain: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country.tld}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Currencies: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country?.currencies[Object.keys(country?.currencies)[0]]?.name}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className={`${props.theme === "light" ? "info-label" : "info-label info-label-dark-mode"}`}>Languages: </strong>
                                             <span className={`${props.theme === "light" ? "country-info" : "country-info country-info-dark-mode"}`}>{country?.languages[Object.keys(country?.languages)[0]]}</span>
                                        </div>
     
                                   </div>
                              </div>
                         
                         
                              <div className="country-infos-box-bottom-part">
                                   <div className="left-part">
                                        <strong className={`${props.theme === "light" ? "border-countries" : "border-countries border-countries-dark-mode"}`} >Border Countries: </strong>
                                   </div>
                                   <div className="right-part">
                                   {countriesBorder.length > 0 ? (

                                        countriesBorder.map((country, index) =>(
                                             <span key={index} className={`${props.theme === "light" ? "border-country-name" : "border-country-name border-country-name-dark-mode"}`} data-name={country.common} onClick={goToCountryBorderSelected}>{country.common}</span>
                                        ))

                                   ) : (<span >Border not found</span>)}
                                   </div>
                                   
                                   
                                 
  
                              </div>
                              </div>
                         </div>
                    ))
               ):"Não há informações para serem mostradas"}
               
               
          </div>
     )
}


export default CountryDetails;
