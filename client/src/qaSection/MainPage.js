import React from "react";
import UserContext from "../usercontext";
import { useContext } from "react";
import AuthRequired from "../AuthRequired";
import './qaSectionCss.css';
import AskQuestion from "./AskQuestion";
import MainPage_01 from "./MainPage_01";
import Homepage from "../Homepage.js"
import { useNavigate, Link } from 'react-router-dom'
function MainPage(props) {

    const { user, setuser } = useContext(UserContext);

    return (
        
        (user !== null) ? (
            <div>
                <div style={{ display: "flex", flexDirection: "row", color: "white", backgroundColor: "#435A64", height: "65px"}}>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                    <div style={{paddingTop:"17px"}}>
                        <Link to="/Main" style={{ fontWeight: "bolder", color: "white", padding: "15px", fontSize: "25px",textDecoration:"none"}}>CodeStack</Link>
                        </div>
                    </div>
                    <div style={{ paddingTop: "22px", fontWeight: "5px", paddingRight: "10px" }}>
                        <Link to="/Home" style={{ textDecoration: "none", fontWeight: "bold", color: "white", fontSize: "20px" }}>Home</Link>
                    </div>
                    <div>
                        <button style={{ height: "35px", backgroundColor: "transparent", paddingTop: "22px", border: "none", fontSize: "20px" }}>
                            <Link to="/qaSection" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> Question-Answer Forum</Link>
                        </button>
                    </div>
                    <div>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", paddingTop: "25px", backgroundColor: "transparent" }}>
                                Language
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link class="dropdown-item" to="/Cprogg">C Programming</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/CPPprogg">C++ Programming</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/Javaprogg">Java</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/Pythonprogg">Python</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/DSA">Data Structures and Algorithms</Link>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item" to="/DBMS">Database Management System</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Harsh1 main" >
                    <div className="Harsh2">
                        <MainPage_01 />
                    </div>
                    <div className="Harsh3">
                        <AskQuestion />
                    </div>
                </div></div>) : (
            <AuthRequired />
        )
    );
}

export default MainPage;