import React, { useContext } from "react";
import "./Header.css";


function Header(props){

     return(
        <header className={`${props.theme == "dark" ? "header-dark-mode" : ""}`}>

            <h3 className="header-title">Where in the world?</h3>
            
            <div className="header-right-part">

               <div className="dark-mode-box" onClick={props.changeToDarkMode}>
                    <img  src="../public/moon-outline.svg" alt="" className="dark-mode-img" />
                    <h5 className="dark-mode-title">Dark Mode</h5>
               </div>

               <div className="light-mode-box disable" onClick={props.changeToLightMode}>
                    <img  src="../public/sunny.png" alt="" className="light-mode-img" />
                    <h5 className="light-mode-title">Light Mode</h5>
               </div>

            </div>

        </header>
    )
}

export default Header;