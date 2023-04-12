import React from "react";
import "./Home.css";


function Home(){

     return(
        <div className="home-container">
           
           <div className="home-top-part-box">
            <form action="" className="search-country-form">
                <input type="text" className="search-country-input" />
            </form>

            <select name="region" id="" className="region-select-list">
                <option value="">Filter by Region</option>
                <option value="Africa">África</option>
                <option value="America">América</option>
                <option value="Asia">Ásia</option>
                <option value="Europa">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
           </div>
        </div>
    )
}

export default Home;