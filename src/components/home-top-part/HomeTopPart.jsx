import React, {useContext, useState} from "react";
import "./HomeTopPart.css";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "https://restcountries.com/v3.1";

function HomeTopPart(){

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
                <form action="" className="search-country-form ">
                    <button className="input-button " onClick={searchingCountry}><img src="../public/lupa.png" alt="" /></button>
                    <input type="text" className="search-country-input " value={searchCountry} onChange={(e)=> setSearchCountry(e.target.value)} placeholder="Search for a country..." />
                </form>
                

                <select name="region" id="" className="region-select-list " value={selectedRegion} onChange={(e)=> setSelectedRegion(e.target.value)}>
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