import "./styled.css"
import Matches from "./components/matches/Matches"
import Test from "./components/matches/Test";
import ClerMacthes from "./components/matches/ClearMacthes";
import React, { useState } from "react";
import Foto from "../src/components/matches/img/download.png"


 function App() {
  const [currentPage, setCurrentPage] = useState("signUp")
  
  const changePage = () => {
    if (currentPage === "signUp") {
      setCurrentPage( <Matches/>);
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
export default App

