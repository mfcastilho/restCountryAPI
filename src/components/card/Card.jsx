import React from 'react';


function Card(){
     
     return(
          <div className="card-container">
               <img src="" alt="" />
               <div className="infos-box">
                    <h4 className="country-name">Nome do País</h4>
                    <p className="country-population">População do País</p>
                    <p className="country-region">Região do País</p>
                    <p className="country-capital">Capital do País</p>     
               </div>
          </div>
     )
}

export default Card;