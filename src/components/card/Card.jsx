import React, { useContext, useEffect, useState } from 'react';
import "./Card.css";
import axios from 'axios';
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";
import { useNavigate } from 'react-router-dom';

const baseURL = "https://restcountries.com/v3.1";

function Card(props){

     const navigate = useNavigate();
     const  { selectedRegion} = useContext(SelectRegionContext);
     const [countries, setCountries] = useState([]);

     async function getAllcountries(){
          try {
               const response = await axios.get(`${baseURL}/all`);
               setCountries(response.data);

          } catch (error) {
               console.log(error.massage);
          }
     }

     async function getCountriesByRegion(){
          try {

               const response = await axios.get(`${baseURL}/region/${selectedRegion}`);
               setCountries(response.data);
               console.log(response.data);
               
          } catch (error) {
               console.log(error.massage);
          }
     }

     function goToCountryDetailsPage(e){

          const countryName = e.currentTarget.getAttribute("data-name");

          ///e.target.dataset.name funcionaria somente se o evento ocorresse no proprio elemento, mas como o
          //onClick está no elemento pai devemos usar o e.currentTarget.getAttribute("data-name")
          //const countryName = e.target.dataset.name;

          navigate(`/country`, {state: {countryName}});
     }

     useEffect(()=>{
          if(selectedRegion === "africa" || selectedRegion === "americas" || selectedRegion === "asia" || selectedRegion === "europe" || selectedRegion === "oceania"){
               getCountriesByRegion()
          }
          
     },[selectedRegion])

     
     useEffect(()=>{
          getAllcountries();
     },[]);
     
     return(
          <div className="card-container">

               {countries.length > 0 ? (
                    countries.map((country, index)=> (
                         <div key={index} onClick={goToCountryDetailsPage} data-name={country.name.common} className={`${props.theme === "light" ? "card-box" : "card-box card-box-dark-mode"}`} >
                              <img className={`${props.theme === "light" ? "card-image" : "card-image card-image-dark-mode"}`} src={`${country.flags.png}`} alt="" />
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