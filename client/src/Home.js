import React from "react";
import c from './assets/c.png'
import cpp from './assets/c++.png'
import java from './assets/java.png'
import python from './assets/python.png'
import dsa from './assets/dsa.png'
import dbms from './assets/dbms.png'
import { useNavigate } from "react-router-dom";
import AuthRequired from "./AuthRequired";
import UserContext from './usercontext';
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Home() {

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
      <div style={{ backgroundImage: "url(https://www.hdnicewallpapers.com/Walls/Big/3D/Dark_3D_HD_Wallpaper.jpg)", backgroundSize: "cover", height: "100%" }}>
        <div style={{display:"flex",flexDirection:"row",color:"white",backgroundColor:"#435A64",height:"65px"}}>
          <div>
            <p style={{fontWeight:"bolder",color:"white",padding:"15px",fontSize:"30px"}}>CodeStack</p>
          </div>
          <div style={{paddingTop:"19px",fontWeight:"5px",paddingRight:"10px"}}>
            <Link to="/Home" style={{textDecoration:"none",fontWeight:"bold",color:"white",fontSize:"27px"}}>Home</Link>
          </div>
          <div>
            <button style={{height: "35px",backgroundColor:"transparent",paddingTop:"22px",border:"none",fontSize:"20px"}}>
              <Link to="/qaSection" style={{textDecoration:"none",color:"white",fontSize:"25px"}}> Question-Answer Forum</Link>
            </button>
          </div>
          <div>
            <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:"white",paddingTop:"30px",backgroundColor:"transparent"}}>
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
        <div class="card-deck">
          <div class="card c" style={{ flexBasis: "2" }}>
            <img src={c} class="images" alt="C-Programming" />
            <div class="card-body">
              <h5 class="card-title">C Programming</h5>
              <p class="card-text">Contains Setting up Environment, Basics of C, Codes for C and platforms to practise codes and devlope your coding skills!</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenCprogg}>Discover Me</button>
            </div>
          </div>


          <div class="card cpp" style={{ flexBasis: "1" }}>
            <img src={cpp} class="images" alt="C++ Programming" />
            <div class="card-body">
              <h5 class="card-title">C++ Programming</h5>
              <p class="card-text">Contains Setting up Environment, Basics of C++, Object Oriented Programming, Codes for C++ and platforms to practise codes and devlope your coding skills!</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenCPPprogg}>Discover Me</button>
            </div>
          </div>


          <div class="card java">
            <img src={java} class="images" alt="Java" />
            <div class="card-body">
              <h5 class="card-title">Java</h5>
              <p class="card-text">Contains Setting up Environment, Basics of Java, Object Oriented Programming, Codes for Java and platforms to practise codes and devlope your coding skills!</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenJavaprogg}>Discover Me</button>
            </div>
          </div>
        </div>


        <div class="card-deck">
          <div class="card python">
            <img src={python} class="images" alt="Python" />
            <div class="card-body">
              <h5 class="card-title">Python</h5>
              <p class="card-text">Contains Setting up Environment, Basics of Python, Object Oriented Programming, Codes for Python and platforms to practise codes and develop your coding skills!</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenPythonprogg}>Discover Me</button>
            </div>
          </div>


          <div class="card dsa">
            <img src={dsa} class="images" alt="Dsa" />
            <div class="card-body">
              <h5 class="card-title">Data Structures and Algorithms</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenDSA}>Discover Me</button>
            </div>
          </div>


          <div class="card dbms">
            <img src={dbms} class="images" alt="DBMS" />
            <div class="card-body">
              <h5 class="card-title">Database Management System</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-info" onClick={OpenDbms}>Discover Me</button>
            </div>
          </div>
        </div>
      </div>) : (
      <AuthRequired />
    )
  )
}