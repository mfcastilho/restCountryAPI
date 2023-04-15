import React, {useContext} from "react";
import "./HomeTopPart.css";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";


function HomeTopPart(){

    const {selectedRegion, setSelectedRegion} = useContext(SelectRegionContext);

    console.log(selectedRegion);


     return(
          
          <div className="home-top-part-box">
                <form action="" className="search-country-form">
                    <button className="input-button"><img src="../public/lupa.png" alt="" /></button>
                    <input type="text" className="search-country-input" placeholder="Search for a country..." />
                </form>

                <select name="region" id="" className="region-select-list" value={selectedRegion} onChange={(e)=> setSelectedRegion(e.target.value)}>
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
     )
}

export default HomeTopPart;