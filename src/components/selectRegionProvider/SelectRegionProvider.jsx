import React, {createContext, useState} from "react";


export const SelectRegionContext = createContext();

export function SelectRegionProvider(props){

     const [selectedRegion, setSelectedRegion] = useState("Filter By Region");
     const [searchCountry, setSearchCountry] = useState("");
     const [selectedMode, setSelectedMode] = useState(1)

     return(
          <SelectRegionContext.Provider value={{selectedRegion, setSelectedRegion, searchCountry, setSearchCountry, selectedMode, setSelectedMode}}>
               {props.children}
          </SelectRegionContext.Provider>     
     )
}