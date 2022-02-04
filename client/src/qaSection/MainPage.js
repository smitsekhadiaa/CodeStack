import React from "react";

import './qaSectionCss.css';
import AskQuestion from "./AskQuestion";
import MainPage_01 from "./MainPage_01";

function MainPage(props){
    return (
        <div className="Harsh1">
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