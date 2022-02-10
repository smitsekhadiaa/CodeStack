import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";


function CPPprogg() {

    const { user, setuser } = useContext(UserContext);

    return (
       
        <div className="CPPprogg">
            <div class="container-fluid heading1">
                <h2 className="cproggtitle">C++ Programming Resources</h2>

                <ul class="list-group clist">
                    <li class="list-group-item list-group-item-success"><h4>Setting up Environment</h4>

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

                            <li><h6>Online C++ Compilers:</h6>
                                <ol>

                                    <li><a href="https://www.onlinegdb.com/online_c_compiler" target="_blank">Online GDB Compiler</a></li>
                                    <li><a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank">Programiz C++ Compiler</a></li>
                                    <li><a href="https://www.jdoodle.com/c-online-compiler/" target="_blank">JDoodle C++ Compiler</a></li>
                                    <li><a href="https://techiedelight.com/compiler/" target="_blank">TechieDelight C++ Compiler</a></li>

                                </ol>
                            </li>
                        </ul>
                        <br />
                    </li>
                    <br/>
                    <li class="list-group-item list-group-item-info"><h4>Basics of C++ Programming</h4>
                        <ul>

                            <ol>
                                <li>Documentation:
                                    <ul>
                                        <li><a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank">GeeksforGeeks</a></li>
                                        <li><a href="https://www.programiz.com/cpp-programming" target="_blank">Programiz</a></li>
                                        <li><a href="https://www.w3schools.com/CPP/default.asp" target="_blank">W3Schools</a></li>
                                    </ul>
                                </li>
                                <li>Videos:
                                    <ul>
                                        <li><a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL" target="_blank">Code with Harry C++ Programming Playlist</a></li>
                                        <li><a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank">Apna College C++ Programming Playlist</a></li>
                                        <li><a href="https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF" target="_blank">Saurabh Shukla's C++ Programming Playlist</a></li>
                                    </ul>
                                </li>
                                <li>Codes:
                                    <ul>
                                        <li><a href="https://drive.google.com/drive/folders/1kmaiNBalsfUZXFE_DZEgji7EyM_fUBe5?usp=sharing" target="_blank">C++ Programming Codes</a></li>
                                    </ul>
                                </li>
                                <li>Books:
                                    <ul>
                                        <li><a href="https://drive.google.com/file/d/1x7CcVnO6Bv1mVCbtwuparIdzhrpbuQsE/view?usp=sharing" target="_blank">OOPS with Balgurusamy C++</a></li>
                                    </ul>
                                </li>
                            </ol>
                            <br />


                        </ul>

                    </li>
                    <br/>
                    <li class="list-group-item list-group-item-warning"><h4>Coding Platforms</h4>

                        <ul>
                            <ol>
                                <li>Practice Coding:
                                    <ul>
                                        <li><a href="https://www.hackerrank.com/domains/c" target="_blank">Hackerrank</a></li>
                                        <li><a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems" target="_blank">CodeChef</a></li>
                                    </ul>
                                </li>
                                <li>Competetive Coding:
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
        </div>
        )
}
export default CPPprogg;