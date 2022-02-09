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
    (user !== null)?(
    <div style={{ backgroundImage: "url(https://www.hdnicewallpapers.com/Walls/Big/3D/Dark_3D_HD_Wallpaper.jpg)", backgroundSize: "cover", height: "100%" }}>
      <div class="card-deck">
        <div class="card c" style={{ flexBasis: "2" }}>
          <img src={c} class="images" alt="C-Programming" />
          <div class="card-body">
            <h5 class="card-title">C Programming</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-info" onClick={OpenCprogg}>Discover Me</button>
          </div>
        </div>


        <div class="card cpp" style={{ flexBasis: "1" }}>
          <img src={cpp} class="images" alt="C++ Programming" />
          <div class="card-body">
            <h5 class="card-title">C++ Programming</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-info" onClick={OpenCPPprogg}>Discover Me</button>
          </div>
        </div>


        <div class="card java">
          <img src={java} class="images" alt="Java" />
          <div class="card-body">
            <h5 class="card-title">Java</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
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
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
    </div>):(
      <AuthRequired/>
    )
  )
}