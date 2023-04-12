import React from "react";
import "./Header.css";


function Header(){
     return(
        <header className="header">

            <h3 className="header-title">Where in the world?</h3>
            
            <div className="header-right-part">

               <div className="dark-mode-box">
                    <img  src="../public/moon-outline.svg" alt="" className="dark-mode-img" />
                    <h5 className="dark-mode title">Dark Mode</h5>
               </div>

               <div className="light-mode-box active">
                    <img  src="../public/sunny-outline.svg" alt="" className="light-mode-img" />
                    <h5 className="light-mode title">Light Mode</h5>
               </div>

            </div>

        </header>
    )
}

export default Header;