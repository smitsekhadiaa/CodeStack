import React from "react";
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

                    <ul class="list-group clist">
                        <li class="list-group-item list-group-item-success" style={{ margin: "20px", borderRadius: "5px", marginLeft: "0px" }}><h4>Setting up Environment</h4>

                            <ul>
                                <li><h6>Visual Studio Code:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://code.visualstudio.com/docs">Setting Up VS Code</a></li>
                                            </ul>
                                        </li>
                                        <li>Video:
                                            <ul>
                                                <li><a href="https://www.youtube.com/watch?v=9xCskNFVt2c">Video to Install VS Code</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>CodeBlocks:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://www3.ntu.edu.sg/home/ehchua/programming/howto/CodeBlocks_HowTo.html">Setting Up CodeBlocks</a></li>
                                            </ul>
                                        </li>
                                        <li>Videos:
                                            <ul>
                                                <li><a href="https://www.youtube.com/watch?v=GWJqsmitR2I">Video to Install CodeBlocks</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>Online C Compilers:</h6>
                                    <ol>

                                        <li><a href="https://www.onlinegdb.com/online_c_compiler">Online GDB Compiler</a></li>
                                        <li><a href="https://www.programiz.com/c-programming/online-compiler/">Programiz C Compiler</a></li>
                                        <li><a href="https://www.jdoodle.com/c-online-compiler/">JDoodle C Compiler</a></li>
                                        <li><a href="https://techiedelight.com/compiler/">TechieDelight C Compiler</a></li>

                                    </ol>
                                </li>
                            </ul>
                            <br />
                        </li>
                        <br />
                        <li class="list-group-item list-group-item-info"><h4>Basics of C Programming</h4>
                            <ul>

                                <ol>
                                    <li>Documentation:
                                        <ul>
                                            <li><a href="https://www.geeksforgeeks.org/c-programming-language/">GeeksforGeeks</a></li>
                                            <li><a href="https://www.programiz.com/c-programming">Programiz</a></li>
                                            <li><a href="https://www.cprogramming.com/">Cprogramming</a></li>
                                        </ul>
                                    </li>
                                    <li>Videos:
                                        <ul>
                                            <li><a href="https://www.youtube.com/watch?v=7Dh73z3icd8&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR">Code with Harry C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/watch?v=si-KFFOW2gw&list=PLVlQHNRLflP8IGz6OXwlV_lgHgc72aXlh">Shrinivas C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq">thenewboston C Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7oBxHp43xQTFrw9f1CDPR6C">Telusko C Programming Playlist</a></li>
                                        </ul>
                                    </li>
                                    <li>Codes:
                                        <ul>
                                            <li><a href="https://drive.google.com/drive/folders/1o81VEPPeu6uCgdYHKUzYBI5z3WfoaD-I?usp=sharing">C Programming Codes</a></li>
                                        </ul>
                                    </li>
                                    <li>Books:
                                        <ul>
                                            <li><a href="https://drive.google.com/file/d/1krHxFWpQlBzMYlx8oUjNr3KLz7IrXZmj/view?usp=sharing">Let Us C</a></li>
                                            <li><a href="https://drive.google.com/file/d/16--P7x1PULbjzwWECYtLIgukMmSkMbnT/view?usp=sharing">C TechMax</a></li>
                                        </ul>
                                    </li>
                                </ol>
                                <br />


                            </ul>

                        </li>
                        <br />
                        <li class="list-group-item list-group-item-warning"><h4>Coding Platforms</h4>

                            <ul>
                                <ol>
                                    <li>Practice Coding:
                                        <ul>
                                            <li><a href="https://www.hackerrank.com/domains/c">Hackerrank</a></li>
                                            <li><a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems">CodeChef</a></li>
                                        </ul>
                                    </li>
                                    <li>Competitive Coding:
                                        <ul>
                                            <li><a href="https://www.hackerrank.com/">Hackerrank</a></li>
                                            <li><a href="https://www.codechef.com/">CodeChef</a></li>
                                            <li><a href="https://codeforces.com/">CodeForces</a></li>
                                            <li><a href="https://atcoder.jp/">ATcoder</a></li>
                                            <li><a href="https://leetcode.com/">Leetcode</a></li>
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
    )
}
export default Cprogg;