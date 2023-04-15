import React from "react";
import "./Header.css";


function Header(){

     function changeToDarkMode(){
          document.querySelector(".light-mode-box").classList.remove("disable");
          document.querySelector(".dark-mode-box").classList.add("disable");

          document.querySelector("body").classList.add("body-dark-mode");
          document.querySelector("main").classList.add("main-dark-mode");
          document.querySelector("header").classList.add("header-dark-mode");
          document.querySelector(".search-country-form").classList.add("search-country-form-dark-mode");
          document.querySelector(".input-button").classList.add("input-button-dark-mode");
          document.querySelector(".search-country-input").classList.add("search-country-input-dark-mode");
          document.querySelector(".region-select-list").classList.add("region-select-list-dark-mode");

          const cards = document.querySelectorAll(".card-box");
          const cardsImages = document.querySelectorAll(".card-container img");

          cards.forEach(card =>{
               card.classList.add("card-box-dark-mode");
          });

          cardsImages.forEach(image =>{
               image.classList.add("card-image-dark-mode");
          });




     }

     function changeToLightMode(){
          document.querySelector(".dark-mode-box").classList.remove("disable");
          document.querySelector(".light-mode-box").classList.add("disable");

          document.querySelector("body").classList.remove("body-dark-mode");
          document.querySelector("main").classList.remove("main-dark-mode");
          document.querySelector("header").classList.remove("header-dark-mode");
          document.querySelector(".search-country-form").classList.remove("search-country-form-dark-mode");
          document.querySelector(".input-button").classList.remove("input-button-dark-mode");
          document.querySelector(".search-country-input").classList.remove("search-country-input-dark-mode");
          document.querySelector(".region-select-list").classList.remove("region-select-list-dark-mode");
          


          const cards = document.querySelectorAll(".card-box");
          const cardsImages = document.querySelectorAll(".card-container img");

          cards.forEach(card =>{
               card.classList.remove("card-box-dark-mode");
          });

          cardsImages.forEach(image =>{
               image.classList.remove("card-image-dark-mode");
          });
          
     }



     return(
        <header className="header ">

            <h3 className="header-title">Where in the world?</h3>
            
            <div className="header-right-part">

               <div className="dark-mode-box" onClick={changeToDarkMode}>
                    <img  src="../public/moon-outline.svg" alt="" className="dark-mode-img" />
                    <h5 className="dark-mode-title">Dark Mode</h5>
               </div>

               <div className="light-mode-box disable" onClick={changeToLightMode}>
                    <img  src="../public/sunny.png" alt="" className="light-mode-img" />
                    <h5 className="light-mode-title">Light Mode</h5>
               </div>

            </div>

        </header>
    )
}

export default Header;