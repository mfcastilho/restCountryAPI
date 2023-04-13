import React from 'react';
import "./Card.css";

function Card(){
     
     return(
          <div className="card-container">
               <img src="../public/Flag_of_Brazil.svg.webp" alt="" />
               <div className="infos-box">
                    <h4 className="country-name">Brazil</h4>

                    <div className="wrapper-country-infos">
                         <strong className="country-population">Population: </strong><span>220.000.000</span>
                    </div>
                    
                    <div className="wrapper-country-infos">
                         <strong className="country-region">Region: </strong><span>Americas</span>
                    </div>

                    <div className="wrapper-country-infos">
                         <strong className="country-capital">Capital: </strong><span>Brasília</span> 
                    </div>
                                         
               </div>
          </div>
     )
}

export default Card;