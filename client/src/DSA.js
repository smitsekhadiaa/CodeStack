import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";

function DSA(){
    const { user, setuser } = useContext(UserContext);

    return(
        (user!==null)?(
        <div className="cprogg" >
            <h1 style={{padding:"10px"}} >DSA</h1>
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
            <p><a href="https://www.geeksforgeeks.org/data-structures/">gfg is a good website for DSA</a></p>

            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">DSA Programs</h4>
            <p><a href="https://github.com/Jigsaw-23122002/450-DSA-NOTES">DSA Programs Written By Harsh </a></p>
            </div>
            </div>

        </div>
        </div>):(
            <AuthRequired/>
        )
    )
}
export default DSA;