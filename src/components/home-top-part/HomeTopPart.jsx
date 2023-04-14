import React, {useContext} from "react";
import "./HomeTopPart.css";
import {SelectRegionContext} from "../selectRegionProvider/SelectRegionProvider";


function HomeTopPart(){

    const {selectedRegion, setSelectedRegion} = useContext(SelectRegionContext);

    console.log(selectedRegion);

    function InsertinMarginBottomIntheTagsOptions(){
        const options = document.querySelectorAll("option");

     //    for(let i = 0; i < options.length; i++){
     //        console.log(options[i].value);
     //        options[i].style.marginBottom = "10px";
     //    }
    }

    InsertinMarginBottomIntheTagsOptions()

     return(
          
          <div className="home-top-part-box">
                <form action="" className="search-country-form">
                    <button className="input-button"><img src="../public/lupa.png" alt="" /></button>
                    <input type="text" className="search-country-input" placeholder="Search for a country..." />
                </form>

                <select name="region" id="" className="region-select-list" value={selectedRegion} onChange={(e)=> setSelectedRegion(e.target.value)}>
                    <option>Filter by Region</option>
                    <option value="" style={{fontSize:"20px"}} disabled>&nbsp;</option>
                    <option className="option-list"value="Africa">África</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="America">América</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="Asia">Ásia</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="Europa">Europa</option>
                    <option value="" style={{fontSize:"7px"}} disabled>&nbsp;</option>
                    <option value="Oceania">Oceania</option>
                    <option value="" style={{fontSize:"20px"}} disabled>&nbsp;</option>
                </select>
           </div>
     )
}

export default HomeTopPart;