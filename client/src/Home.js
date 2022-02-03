import React from "react";
import c from './assets/c.png'
import cpp from './assets/c++.png'
import java from './assets/java.png'
import python from './assets/python.png'
import dsa from './assets/dsa.png'
import dbms from './assets/dbms.png'
import Cprogg from "./Cprogg";
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
export default function Home(){
    // let navigate = useNavigate(); 
  const OpenCprogg = () =>{ 
    // let path = `/cprogg`; 
    // navigate(path);
    <Cprogg/>
  }
    return(
  <div>
    <div class="card-deck">
  <div class="card c">
      
    <img src={c} class="images" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">C Programming</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info" onClick={OpenCprogg}>Discover Me</button>


    </div>
  </div>


  <div class="card cpp">
    <img src={cpp} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">C++ Programming</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Discover Me</button>

    </div>
  </div>


  <div class="card java">
    <img src={java} class="images" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Java</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Discover Me</button>

    </div>
  </div>
</div>


<div class="card-deck">
  <div class="card python">
      
    <img src={python} class="images" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Python</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Discover Me</button>

    </div>
  </div>


  <div class="card dsa">
    <img src={dsa} class="images" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Data Structures and Algorithms</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Discover Me</button>

    </div>
  </div>


  <div class="card dbms">
    <img src={dbms} class="images" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Database Management System</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
    <button type="button" class="btn btn-info">Discover Me</button>

    </div>
  </div>
</div>



</div>
    )
}