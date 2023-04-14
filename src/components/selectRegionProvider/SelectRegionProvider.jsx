import React, {createContext, useState} from "react";


export const SelectRegionContext = createContext();

export function SelectRegionProvider(props){

     const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

     return(
          <SelectRegionContext.Provider value={{selectedRegion, setSelectedRegion}}>
               {props.children}
          </SelectRegionContext.Provider>     
     )
}