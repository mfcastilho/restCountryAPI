import React, { useEffect, useState } from "react";
import "./CountryDetails.css";
import BackButton from "../components/back-button/BackButton";
import { useLocation } from "react-router-dom";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1";

function CountryDetails(){

     const location = useLocation();
     const countryName = location.state.countryName;
     const [country, setCountry] = useState([]);
     const [countriesBorder, setCountriesBorder] = useState([]);
   

     async function getCountryInfos(){
          try {
               
               const name = countryName.toLowerCase();
               const response = await axios.get(`${baseURL}/name/${name}`);
               setCountry(response.data);

          } catch (error) {
               console.log(error.data.message);
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
               console.log(countryBorders)
               
               setCountriesBorder(countryBorders);
               // console.log(countriesBorder);

          } catch (error) {
               console.log(error.data.message);
          }
     }

     useEffect(()=>{
          getCountryInfos();
          getCountryBorders();
          
     },[])


     return (
          <div className="country-details-container">
               <BackButton />

               {country.length > 0 ? (

                    country.map((country, index) => (
                         <div key={index} className="country-flag-and-infos-container">
                         <img src={country.flags.svg} alt="" />
                         <div className="country-infos-box">

                              <h4>{country.name.common}</h4>
                              <div className="wrapper-country-infos-box-parts">
                                   
                                   <div className="country-infos-box-left-part">
                                        
                                        <div className="hugging-elements">
                                             <strong className="info-label">Native Name: </strong>
                                             <span className="country-info">{country.name.nativeName[Object.keys(country?.name?.nativeName)[0]].common}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className="info-label">Population: </strong>
                                             <span className="country-info">{country.population}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className="info-label">Region: </strong>
                                             <span className="country-info">{country.region}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className="info-label">Sub Region: </strong>
                                             <span className="country-info">{country.subregion}</span>
                                        </div>
                                        <div className="hugging-elements">
                                             <strong className="info-label">Capital: </strong>
                                             <span className="country-info">{country.capital}</span>  
                                        </div>
          
                                   </div>

                                   <div className="country-infos-box-right-part">

                                        <div className="hugging-elements">
                                             <strong className="info-label">Top Level Domain: </strong>
                                             <span className="country-info">{country.tld}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className="info-label">Currencies: </strong>
                                             <span className="country-info">{country?.currencies[Object.keys(country?.currencies)[0]]?.name}</span>
                                        </div>

                                        <div className="hugging-elements">
                                             <strong className="info-label">Languages: </strong>
                                             <span className="country-info">{country?.languages[Object.keys(country?.languages)[0]]}</span>
                                        </div>
     
                                   </div>
                              </div>
                         
                         
                              <div className="country-infos-box-bottom-part">
                                   <div className="left-part">
                                        <strong className="border-countries">Border Countries: </strong>
                                   </div>
                                   <div className="right-part">
                                   {countriesBorder.length > 0 ? (

                                        countriesBorder.map((country, index) =>(
                                             <span key={index} className="border-country-name">{country.common}</span>
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
