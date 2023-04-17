import React, {useContext, useState} from "react";
import "./HomeTopPart.css";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "https://restcountries.com/v3.1";

function HomeTopPart(props){

    const {selectedRegion, setSelectedRegion, searchCountry, setSearchCountry} = useContext(SelectRegionContext);
    const [country, setCountry] = useState(true);
    
    const navigate = useNavigate();

    async function searchingCountry(e){
        e.preventDefault();
        
        try {

            const name = searchCountry.toLowerCase();

            const response = await axios.get(`${baseURL}/name/${name}`);
            if(response){
                setCountry(true);
            }
            
            const countryName = response.data[0].name.common;
            navigate("/country", {state: {countryName}});
            
        } catch (error) {
            setCountry(false);
            console.log(error.message);
        }
       
    }


     return(
       
        <div className="home-top-part-container">
            <div className="home-top-part-box">
                <form action="" className={`${props.theme === "light" ? "search-country-form" : "search-country-form search-country-form-dark-mode" }`}> 
                    <button className={`${props.theme === "light" ? "input-button" : "input-button input-button-dark-mode"}`} onClick={searchingCountry}><img className={`${props.theme === "dark" ? "image-dark" : ""}`} src="../public/lupa.png" alt="" /></button>
                    <input type="text" className={`${props.theme === "light" ? "search-country-input" : "search-country-input search-country-input-dark-mode"}`} value={searchCountry} onChange={(e)=> setSearchCountry(e.target.value)} placeholder="Search for a country..." />
                </form>
                {!country && <span className="danger-mobile">País não encontrado</span>}
                

                <select name="region" id="" className={`${props.theme === "light" ? "region-select-list" : "region-select-list region-select-list-dark-mode"}`} value={selectedRegion} onChange={(e)=> setSelectedRegion(e.target.value)}>
                    <option>Filter by Region</option>
                    <option value="" style={{fontSize:"20px"}} disabled>&nbsp;</option>
                    <option value="africa" className="option-list">África</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="americas">América</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="asia">Ásia</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="europe">Europa</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="oceania">Oceania</option>
                    <option value="" style={{fontSize:"20px"}} disabled>&nbsp;</option>
                </select>
           </div>
           {!country && <span className="danger">País não encontrado</span>}
        </div>
          
          
     )
}

export default HomeTopPart;