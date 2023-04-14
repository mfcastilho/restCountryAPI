import React, { useContext, useEffect, useState } from 'react';
import "./Card.css";
import axios from 'axios';
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";

const baseURL = "https://restcountries.com/v3.1";

function Card(){

     const  { selectedRegion} = useContext(SelectRegionContext);
     const [countries, setCountries] = useState([]);

     async function getAllcountries(){
          try {
               const response = await axios.get(`${baseURL}/all`);
               setCountries(response.data);
               // response.data.forEach(country=>{
               //      console.log(country.name.common);
               // })

          } catch (error) {
               console.log(error.data.massage);
          }
     }

     async function getCountriesByRegion(){
          try {

               const response = await axios.get(`${baseURL}/region/${selectedRegion}`);
               setCountries(response.data);
               console.log(response.data);
               
          } catch (error) {
               console.log(error);
          }
     }

     useEffect(()=>{
          getCountriesByRegion()
     },[selectedRegion])

     
     

     useEffect(()=>{
          getAllcountries();
     },[]);
     
     return(
          <div className="card-container">

               {countries.length > 0 ? (
                    countries.map((country, index)=> (
                         <div key={index} className="card-box">
                              <img src={`${country.flags.png}`} alt="" />
                              <div className="infos-box">
                                   <h4 className="country-name">{country.name.common}</h4>

                                   <div className="wrapper-country-infos">
                                        <strong className="country-population">Population: </strong><span>{country.population}</span>
                                   </div>
                                   
                                   <div className="wrapper-country-infos">
                                        <strong className="country-region">Region: </strong><span>{country.region}</span>
                                   </div>

                                   <div className="wrapper-country-infos">
                                        <strong className="country-capital">Capital: </strong><span>{country.capital}</span> 
                                   </div>
                                                       
                              </div>
                         </div>
                    ))
               ): "No countries"}
          </div>
     )
}

export default Card;