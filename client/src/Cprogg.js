import React from "react";
<<<<<<< HEAD
import pict1 from "./assets/pict1.jpg"
import pict2 from "./assets/pict2.jpg"
import pict3 from "./assets/pict3.jpg"

import {useState} from "react"
function Cprogg(){

    
    let [booleanAddAnswer,setBooleanAddAnswer]=useState(false);
    let [booleanSeeAnswer,setBooleanSeeAnswer]=useState(false);
    let array=[false,false,false]
    let [arr,setArr]=useState(array)
    function arrFunction0(){
        setArr[0]=true;
        console.log("true")
    }
    function arrFunction0_(){
        setArr[0]=false;
    }

    function arrFunction1(){
        setBooleanAddAnswer(true);
        setBooleanSeeAnswer(false);
    }
    function arrFunction1_(){
        setBooleanAddAnswer(false);
        setBooleanSeeAnswer(true);
    }

    function arrFunction2(){
        setBooleanAddAnswer(true);
        setBooleanSeeAnswer(false);
    }
    function arrFunction2_(){
        setBooleanAddAnswer(false);
        setBooleanSeeAnswer(true);
    }

    return(
        <div className="cprogg">
           <div class="container-fluid heading1">
               <h2>C Programming Resources- Documentations</h2>

        <ul class="list-group clist">
            <li class="list-group-item list-group-item-success">Introduction to C
        <div>

        <button onClick={arrFunction0}>Add Answer</button>
        <button onClick={arrFunction0_}>See Answers</button>
        <div>
            {arr[0] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        
        </div>
        </div>
 
    </li>
    <br/>
    <li class="list-group-item list-group-item-info">Variables and Keywords
    <button onClick={arrFunction1}>Add Answer</button>
        <button onClick={arrFunction1_}>See Answers</button>
        <div>
            {arr[1] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        
        </div>
    </li>
    <br/>
    <li class="list-group-item list-group-item-warning">
    <button onClick={arrFunction2}>Add Answer</button>
        <button onClick={arrFunction2_}>See Answers</button>
        <div>
            {arr[2] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        </div>
    </li>
    <br/>
    <li class="list-group-item list-group-item-danger">Storage Classes in C</li>
    <br/>
    <li class="list-group-item list-group-item-success">Introduction to Operators</li>
    <li class="list-group-item list-group-item-info">Preprocessor in C</li>
    <li class="list-group-item list-group-item-warning">Conditional and Control Statements in C</li>
    <li class="list-group-item list-group-item-danger">Loops</li>
</ul>  

</div>
</div>    
=======
import UserContext from "./usercontext";
import { useContext } from "react";


import { useState } from "react"
import AuthRequired from "./AuthRequired";
function Cprogg() {

    const { user, setuser } = useContext(UserContext);

    return (
        (user !== null) ? (
            <div className="Cprogg">
                <div class="container-fluid heading1">
                    <h2 className="cproggtitle" style={{ color: "white" }}>C Programming Resources</h2>

                    <ul class="list-group clist" style={{ display: "flex", flexDirection: "column" }}>
                        <li class="list-group-item list-group-item-success" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Setting up Environment</h4>

                            <ul>
                                <li><h6>Visual Studio Code:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://code.visualstudio.com/docs" target="_blank">Setting Up VS Code</a></li>
                                            </ul>
                                        </li>
                                        <li>Video:
                                            <ul>
                                                <li><a href="https://www.youtube.com/watch?v=9xCskNFVt2c" target="_blank">Video to Install VS Code</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>CodeBlocks:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://www3.ntu.edu.sg/home/ehchua/programming/howto/CodeBlocks_HowTo.html" target="_blank">Setting Up CodeBlocks</a></li>
                                            </ul>
                                        </li>
                                        <li>Videos:
                                            <ul>
                                                <li><a href="https://www.youtube.com/watch?v=GWJqsmitR2I" target="_blank">Video to Install CodeBlocks</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>Online C Compilers:</h6>
                                    <ol>

                                        <li><a href="https://www.onlinegdb.com/online_c_compiler" target="_blank">Online GDB Compiler</a></li>
                                        <li><a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank">Programiz C Compiler</a></li>
                                        <li><a href="https://www.jdoodle.com/c-online-compiler/" target="_blank">JDoodle C Compiler</a></li>
                                        <li><a href="https://techiedelight.com/compiler/">TechieDelight C Compiler</a></li>

                                    </ol>
                                </li>
                            </ul>
                            <br />
                        </li>
                        <br />
                        <li class="list-group-item list-group-item-info" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Basics of C Programming</h4>
                            <ul>

                                <ol>
                                    <li>Documentation:
                                        <ul>
                                            <li><a href="https://www.geeksforgeeks.org/c-programming-language/" target="_blank">GeeksforGeeks</a></li>
                                            <li><a href="https://www.programiz.com/c-programming" target="_blank">Programiz</a></li>
                                            <li><a href="https://www.cprogramming.com/" target="_blank">Cprogramming</a></li>
                                        </ul>
                                    </li>
                                    <li>Videos:
                                        <ul>
                                            <li><a href="https://www.youtube.com/watch?v=7Dh73z3icd8&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" target="_blank">Code with Harry C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/watch?v=si-KFFOW2gw&list=PLVlQHNRLflP8IGz6OXwlV_lgHgc72aXlh" target="_blank">Shrinivas C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq" target="_blank">thenewboston C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7oBxHp43xQTFrw9f1CDPR6C" target="_blank">Telusko C Programming Playlist</a></li>
                                        </ul>
                                    </li>
                                    <li>Codes:
                                        <ul>
                                            <li><a href="https://drive.google.com/drive/folders/1o81VEPPeu6uCgdYHKUzYBI5z3WfoaD-I?usp=sharing" target="_blank">C Programming Codes</a></li>
                                        </ul>
                                    </li>
                                    <li>Books:
                                        <ul>
                                            <li><a href="https://drive.google.com/file/d/1krHxFWpQlBzMYlx8oUjNr3KLz7IrXZmj/view?usp=sharing" target="_blank">Let Us C</a></li>
                                            <li><a href="https://drive.google.com/file/d/16--P7x1PULbjzwWECYtLIgukMmSkMbnT/view?usp=sharing" target="_blank">C TechMax</a></li>
                                        </ul>
                                    </li>
                                </ol>
                                <br />


                            </ul>

                        </li>
                        <br />
                        <li class="list-group-item list-group-item-warning" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Coding Platforms</h4>

                            <ul>
                                <ol>
                                    <li>Practice Coding:
                                        <ul>
                                            <li><a href="https://www.hackerrank.com/domains/c" target="_blank">Hackerrank</a></li>
                                            <li><a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems" target="_blank">CodeChef</a></li>
                                        </ul>
                                    </li>
                                    <li>Competitive Coding:
                                        <ul>
                                            <li><a href="https://www.hackerrank.com/" target="_blank">Hackerrank</a></li>
                                            <li><a href="https://www.codechef.com/" target="_blank">CodeChef</a></li>
                                            <li><a href="https://codeforces.com/" target="_blank">CodeForces</a></li>
                                            <li><a href="https://atcoder.jp/" target="_blank">ATcoder</a></li>
                                            <li><a href="https://leetcode.com/" target="_blank">Leetcode</a></li>
                                        </ul>
                                    </li>

                                </ol>
                                <br />
                            </ul>

                        </li>
                    </ul>

                </div>
            </div>) : (
            <AuthRequired />
        )
>>>>>>> eaeb3d7c6634c6bcd60d0279d189eb846cdb1892
    )
}
export default Cprogg;