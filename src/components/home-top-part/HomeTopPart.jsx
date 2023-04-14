import React from "react";
import "./HomeTopPart.css"


function HomeTopPart(){


    function InsertinMarginBottomIntheTagsOptions(){
        const options = document.querySelectorAll("option");

        for(let i = 0; i < options.length; i++){
            console.log(options[i].value);
            options[i].style.marginBottom = "10px";
        }
    }

    InsertinMarginBottomIntheTagsOptions()

     return(
          
          <div className="home-top-part-box">
                <form action="" className="search-country-form">
                    <button className="input-button"><img src="../public/lupa.svg" alt="" /></button>
                    <input type="text" className="search-country-input" />
                </form>

                <select name="region" id="" className="region-select-list" defaultValue="Filter by Region">
                    <option disabled hidden>Filter by Region</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                    <option className="option-list"value="Africa">África</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                    <option value="America">América</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                    <option value="Asia">Ásia</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                    <option value="Europa">Europa</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                    <option value="Oceania">Oceania</option>
                    <option value="" style={{fontSize:"5px"}} disabled>&nbsp;</option>
                </select>
           </div>
     )
}

export default HomeTopPart;