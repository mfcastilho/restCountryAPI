import React, {createContext, useState} from "react";


export const SelectRegionContext = createContext();

export function SelectRegionProvider(props){

     const [selectedRegion, setSelectedRegion] = useState("Filter By Region");
     const [searchCountry, setSearchCountry] = useState("");

     return(
          <SelectRegionContext.Provider value={{selectedRegion, setSelectedRegion, searchCountry, setSearchCountry}}>
               {props.children}
          </SelectRegionContext.Provider>     
     )
}