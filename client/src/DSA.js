import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";

function DSA(){
    const { user, setuser } = useContext(UserContext);

    return(
       
        <div className="Cprogg">
            <div class="container-fluid heading1">
                <h2 className="cproggtitle" style={{color:"white"}}>DSA Programming Resources</h2>
     
            <div style={{paddingLeft:"25px" ,paddingRight:"25px"}}>
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Codechef</h4>
            <p><a href="https://www.codechef.com/">Competitive Programing at Codechef </a></p>
          
            </div>
            <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">CodeForces</h4>
            <p><a href="https://codeforces.com/">Competitive Programing at Codeforces </a></p>
            </div>

            <div class="alert alert-info" role="alert">
            <h4 class="alert-heading">Leetcode</h4>
            <p><a href="https://leetcode.com/problemset/all/">Leetcode for DSA</a></p>
            </div>

            <div class="alert alert-secondary" role="alert">
            <h4 class="alert-heading">GFG</h4>
            <p><a href="https://www.geeksforgeeks.org/data-structures/">Geeks For Geeks</a></p>
            </div>
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">DSA Programs</h4>
            <p><a href="https://github.com/Jigsaw-23122002/450-DSA-NOTES">DSA Programs Written By Harsh </a></p>
            </div>
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">DSA Programs For Dsa 450</h4>
            <p><a href="https://github.com/Jigsaw-23122002/450-DSA-NOTES">DSA Programs Written By Harsh </a></p>
            </div>
            <div>
            </div>
            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">INTERVIEW EXPERIENCES</h4>
            <p><a href="https://drive.google.com/drive/folders/1BCKFtr9FWDI0iJ74bTYJdsYS74uKBq98?usp=sharing">Intership,Placements and interview experiences of seniors at VJTI </a></p>
            </div>
        </div>
        </div>
        </div>
        )
}
export default DSA;