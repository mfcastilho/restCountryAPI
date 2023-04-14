import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";
import CountryDetails from "./src/pages/CountryDetails";


function RoutesApp(){
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country" element={<CountryDetails />} />
               </Routes>
          </BrowserRouter>
     );
}

export default RoutesApp;