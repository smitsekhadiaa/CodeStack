import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";
import pict1 from "./assets/pict1.jpg"
import pict2 from "./assets/pict2.jpg"
import pict3 from "./assets/pict3.jpg"

import { useState } from "react"
function Pythonprogg() {

    const { user, setuser } = useContext(UserContext);

    return (
        (user != null) ? (
            <div className="Cprogg">
                
                <div class="container-fluid heading1">
                    <h2 className="cproggtitle" style={{ color: "white" }}>Python Programming Resources</h2>

                    <ul class="list-group clist">
                        <li class="list-group-item list-group-item-success" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Setting up Environment</h4>

                            <ul>
                                <li><h6>Jupyter Notebook:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-jupyter-notebook-for-python-3" target="_blank">Setting Up Jupyter Notebook</a></li>
                                            </ul>
                                        </li>
                                        <li>Video:
                                            <ul>
                                                <li><a href="https://youtu.be/AuTkAWEa06E" target="_blank">Video to Install Jupyter Notebook</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>VScode:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://code.visualstudio.com/docs" target="_blank">Setting Up VScode</a></li>
                                            </ul>
                                        </li>
                                        <li>Videos:
                                            <ul>
                                                <li><a href="https://youtu.be/ntLJmHOJ0ME" target="_blank">Video to Install Vscode</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>Online Python Compilers:</h6>
                                    <ol>

                                        <li><a href="https://www.jdoodle.com/python3-programming-online/" target="_blank">JDoodle Python Compiler</a></li>
                                        <li><a href="https://www.programiz.com/python-programming/online-compiler/" target="_blank">Programiz Python Compiler</a></li>
                                        <li><a href="https://www.onlinegdb.com/online_python_compiler" target="_blank">Online GDB Compiler</a></li>
                                        <li><a href="https://www.tutorialspoint.com/execute_python_online.php" target="_blank">Tutorialpoint Python Compiler</a></li>

                                    </ol>
                                </li>
                            </ul>
                            <br />
                        </li>
                        <br />
                        <li class="list-group-item list-group-item-info" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Basics of Python Programming</h4>
                            <ul>

                                <ol>
                                    <li>Documentation:
                                        <ul>
                                            <li><a href="https://www.geeksforgeeks.org/python-programming-language/learn-python-tutorial/" target="_blank">GeeksforGeeks</a></li>
                                            <li><a href="https://docs.python.org/3/tutorial/introduction.html" target="_blank">Python Tutorial for Beginners</a></li>
                                            <li><a href="w3schools.com/python/" target="_blank">W3School</a></li>
                                        </ul>
                                    </li>
                                    <li>Videos:
                                        <ul>
                                            <li><a href="https://www.youtube.com/watch?v=gfDE2a7MKjA" target="_blank">Code with Harry Python Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLwgFb6VsUj_lQTpQKDtLXKXElQychT_2j" target="_blank">Python Programming for Beginners Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n" target="_blank">Python Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" target="_blank">Telusko Python Programming Playlist</a></li>
                                        </ul>
                                    </li>
                                    <li>Codes:
                                        <ul>
                                            <li><a href="https://www.codewithharry.com/videos/python-tutorial-easy-for-beginners" target="_blank">Python Programming Codes</a></li>
                                        </ul>
                                    </li>
                                    <li>Books:
                                        <ul>
                                            <li><a href="https://drive.google.com/file/d/1imGJdpZHP4-j8FmFLr9Shwytenz9_P2i/view?usp=sharing"target="_blank">Beginning Programing with Python</a></li>
                                            <li><a href="https://drive.google.com/file/d/1ReBTOwpoDln24174HmQ151X9-a3fizu4/view?usp=sharing" target="_blank">Python Notes For Professionals</a></li>

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
    )
}
export default Pythonprogg;