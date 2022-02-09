import React from "react";
<<<<<<< HEAD
function DSA(){
    return(
        <div className="DSA">
            <h1>DSA</h1>
        </div>
=======
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";

function DSA() {
    const { user, setuser } = useContext(UserContext);

    return (
        (user !== null) ? (
            <div className="Cprogg">
                <div class="container-fluid heading1">
                    <h2 className="cproggtitle" style={{ color: "white" }}>DSA Programming Resources</h2>

                    <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Codechef</h4>
                            <p><a href="https://www.codechef.com/" target="_blank">Competitive Programing at Codechef </a></p>

                        </div>
                        <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">CodeForces</h4>
                            <p><a href="https://codeforces.com/" target="_blank">Competitive Programing at Codeforces </a></p>
                        </div>

                        <div class="alert alert-info" role="alert">
                            <h4 class="alert-heading">Leetcode</h4>
                            <p><a href="https://leetcode.com/problemset/all/" target="_blank">Leetcode for DSA</a></p>
                        </div>

                        <div class="alert alert-secondary" role="alert">
                            <h4 class="alert-heading">GFG</h4>
                            <p><a href="https://www.geeksforgeeks.org/data-structures/" target="_blank">Geeks For Geeks</a></p>
                        </div>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">DSA Programs</h4>
                            <p><a href="https://github.com/Jigsaw-23122002/450-DSA-NOTES" target="_blank">DSA Programs Written By Harsh </a></p>
                        </div>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">DSA 450</h4>
                            <p><a href="https://github.com/Jigsaw-23122002/450-DSA-NOTES" target="_blank">DSA Programs Written By Harsh,Neel,Smit & Dhruv</a></p>
                        </div>
                        <div>
                        </div>
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Interview Expirience</h4>
                            <p><a href="https://drive.google.com/drive/folders/1BCKFtr9FWDI0iJ74bTYJdsYS74uKBq98?usp=sharing" target="_blank">Intership,Placements and interview experiences of seniors at VJTI </a></p>
                        </div>
                    </div>
                </div>
            </div>) : (
            <AuthRequired />
        )
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
    )
}
export default DSA;