import React from "react";
import "./Home.css";
import HomeTopPart from "../components/home-top-part/HomeTopPart";
import Card from "../components/card/Card";


function Home(){

     return(
        <div className="home-container">
           
           <HomeTopPart />
           <Card />

        </div>
    )
}

export default Home;