import React from "react";
import "./Home.css";
import HomeTopPart from "../components/home-top-part/HomeTopPart";
import Card from "../components/card/Card";
import { SelectRegionProvider } from "../components/selectRegionProvider/SelectRegionProvider";

function Home(props){

     return(
          <div className="home-container">
           
          <main className={`${props.theme === "dark" ? "main-dark-mode" : ""}`}>
               <HomeTopPart theme={props.theme} />
               <Card theme={props.theme} />
          </main>
           

        </div>
    )
}

export default Home;