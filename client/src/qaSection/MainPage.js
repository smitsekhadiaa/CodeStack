import React from "react";
import UserContext from "../usercontext";
import { useContext } from "react";
import AuthRequired from "../AuthRequired";
import './qaSectionCss.css';
import AskQuestion from "./AskQuestion";
import MainPage_01 from "./MainPage_01";

function MainPage(props){

    const { user, setuser } = useContext(UserContext);

    return (
    
        <div className="Harsh1 main">
            <div className="Harsh2">
                <MainPage_01/>
            </div>
            <div className="Harsh3">
                <AskQuestion/>
            </div>
       </div>
    );
}

export default MainPage;