import "./styled.css"
import Matches from "./components/matches/matches"
import Test from "./components/matches/test";
import ClerMacthes from "./components/matches/clearMacthes";
import React, { useState } from "react";
import Foto from "../src/components/matches/img/download.png"


export default function App() {
  const [currentPage, setCurrentPage] = useState("signUp")
  
  const changePage = () => {
    if (currentPage === "signUp") {
      setCurrentPage(Matches);
    } else {
      setCurrentPage("signUp");
    }
  };

  return (
    <div>
    <ClerMacthes/>
    
    <div className="centro">
      <nav className="navBar">
        <img src={Foto} ></img>
        <button onClick={changePage} >👥</button>
      </nav>
      {currentPage === "signUp" ? <Test /> : <Matches />}
    </div>
    </div>
  );
}


