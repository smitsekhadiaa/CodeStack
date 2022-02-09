import React from "react";
import './Homepage.scss';
import c from './assets/c.png'
import UserContext from "./usercontext";
import { useContext } from "react";

import { useNavigate, Link } from 'react-router-dom'
import AuthRequired from "./AuthRequired";
function Home1() {
    let navigate = useNavigate();

    const { user, setuser } = useContext(UserContext);

    function OpenCprogg() {
        let path = `/Cprogg`;
        navigate(path);
    }

    function OpenCPPprogg() {
        let path = `/CPPprogg`;
        navigate(path);

    }

    function OpenJavaprogg() {
        let path = `/Javaprogg`;
        navigate(path);

    }

    function OpenPythonprogg() {
        let path = `/Pythonprogg`;
        navigate(path);

    }

    function OpenDSA() {
        let path = `/DSA`;
        navigate(path);

    }

    function OpenDbms() {
        let path = `/Dbms`;
        navigate(path);

    }

    return (
        (user !== null) ? (
            <div>
                <div style={{ display: "flex", flexDirection: "row", color: "white", backgroundColor: "#435A64", height: "65px" }}>
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <p style={{ fontWeight: "bolder", color: "white", padding: "15px", fontSize: "30px" }}>CodeStack</p>
                    </div>
                    <div style={{ paddingTop: "19px", fontWeight: "5px", paddingRight: "10px" }}>
                        <Link to="/Home" style={{ textDecoration: "none", fontWeight: "bold", color: "white", fontSize: "27px" }}>Home</Link>
                    </div>
                    <div>
                        <button style={{ height: "35px", backgroundColor: "transparent", paddingTop: "22px", border: "none", fontSize: "20px" }}>
                            <Link to="/qaSection" style={{ textDecoration: "none", color: "white", fontSize: "25px" }}> Question-Answer Forum</Link>
                        </button>
                    </div>
                    <div>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", paddingTop: "30px", backgroundColor: "transparent" }}>
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
                <div style={{ marginTop: "45px", textAlign: "center" }}>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">C Programming</h1>
                        </div>

                        <div className="back">
                            <h2>C</h2>
                            <p>Contains Setting up Environment, Basics of C, Codes for C and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" onClick={OpenCprogg}>Discover me</button>
                        </div>
                    </div>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">C++ Programming</h1>
                        </div>
                        <div className="back">
                            <h2>C++</h2>
                            <p>Contains Setting up Environment, Basics of C++, Object Oriented Programming, Codes for C++ and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" onClick={OpenCPPprogg}>Discover me</button>
                        </div>
                    </div>
                    <div className="flip">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Java</h1>
                        </div>
                        <div className="back">
                            <h2>Java</h2>
                            <p>Setting up Environment, Basics of Java, Object Oriented Programming, and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" onClick={OpenJavaprogg}>Discover me</button>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">Python</h1>
                        </div>
                        <div className="back">
                            <h2>Python</h2>
                            <p>Setting up Environment, Basics of Python, Object Oriented Programming, and platforms to practise codes and devlope your coding skills!</p>
                            <button className="btn btn-info" onClick={OpenPythonprogg}>Discover me</button>
                        </div>
                    </div>
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">DSA</h1>
                        </div>
                        <div className="back">
                            <h2>DSA</h2>
                            <p>Basics of DataStructures and Algorithms</p>
                            <button className="btn btn-info" onClick={OpenDSA}>Discover me</button>
                        </div>
                    </div>
                    <div className="flip flip-vertical">
                        <div className="front" style={{ backgroundImage: "url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)" }}>
                            <h1 className="text-shadow">DBMS</h1>
                        </div>
                        <div className="back">
                            <h2>DBMS</h2>
                            <p>Setting up MariaDB, Basics of DBMS, SQL.</p>
                            <button className="btn btn-info" onClick={OpenDbms}>Discover me</button>
                        </div>
                    </div>
                </div>
            </div>) : (
            <AuthRequired />
        )
    )
}
export default Home1