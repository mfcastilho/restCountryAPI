import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import CountryDetails from "./src/pages/CountryDetails";


function RoutesApp(props){
     return (
          <BrowserRouter>
               <Routes>
                    <Route   path="/" element={<Home changeToDarkMode={props.changeToDarkMode} changeToLightMode={props.changeToLightMode} theme={props.theme}  />} />
                    <Route  path="/country" element={<CountryDetails changeToDarkMode={props.changeToDarkMode} changeToLightMode={props.changeToLightMode} theme={props.theme}  />} />
               </Routes>
          </BrowserRouter>
     );
}

export default RoutesApp;