import React from 'react';
import JSONDATA from "./Search.json";
import { useState } from 'react';

export default function Header(props){

let [searchTerm,setSearchTerm]=useState("");

return (
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="/">CodeStack</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Language
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/Cprogg">C Programming</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/CPPprogg">C++ Programming</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="Javaprogg">Java</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/Pythonprogg">Python</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/DSA">Data Structures and Algorithms</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/DBMS">Database Management System</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <div style={{display:"flex",flexDirection:"column"}}>
        <input class="form-control mr-sm-2" type="search" placeholder="Search"
        onChange={(event)=>{setSearchTerm(event.target.value)}} aria-label="Search"></input>
        <div style={{marginBottom:"-1px"}}>
          {JSONDATA.filter((value)=>{
            let t=value.heading.toLowerCase();
            let u=searchTerm.toLowerCase()
            if(value==""){
              return value;
            }
            else if(t.includes(u)){
              return value;
            }
          }).map((element)=>{
            return (
              searchTerm != ""?(
              <div style={{width:"95%",backgroundColor:"white",borderRadius:"3px",padding:"5px",border:"1px solid grey",position:"relative"}}>
                {element.heading}
              </div>):(<div></div>)
            );
          })}
        </div>
      </div>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}
