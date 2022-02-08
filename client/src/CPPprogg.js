import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";


function CPPprogg() {

    const { user, setuser } = useContext(UserContext);

    return (
        (user!==null)?(
        <div className="CPPprogg">
            <div class="container-fluid heading1">
                <h2 className="cproggtitle">C++ Programming Resources</h2>

                <ul class="list-group clist">
                    <li class="list-group-item list-group-item-success"><h4>Setting up Enviornment</h4>

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

                            <li><h6>Online C++ Compilers:</h6>
                                <ol>

                                    <li><a href="https://www.onlinegdb.com/online_c_compiler">Online GDB Compiler</a></li>
                                    <li><a href="https://www.programiz.com/c-programming/online-compiler/">Programiz C++ Compiler</a></li>
                                    <li><a href="https://www.jdoodle.com/c-online-compiler/">JDoodle C++ Compiler</a></li>
                                    <li><a href="https://techiedelight.com/compiler/">TechieDelight C++ Compiler</a></li>

                                </ol>
                            </li>
                        </ul>
                        <br />
                    </li>

                    <li class="list-group-item list-group-item-info"><h4>Basics of C++ Programming</h4>
                        <ul>

                            <ol>
                                <li>Documentation:
                                    <ul>
                                        <li><a href="https://www.geeksforgeeks.org/c-plus-plus/">GeeksforGeeks</a></li>
                                        <li><a href="https://www.programiz.com/cpp-programming">Programiz</a></li>
                                        <li><a href="https://www.w3schools.com/CPP/default.asp">W3Schools</a></li>
                                    </ul>
                                </li>
                                <li>Videos:
                                    <ul>
                                        <li><a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL">Code with Harry C++ Programming Playlist</a></li>
                                        <li><a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ">Apna College C++ Programming Playlist</a></li>
                                        <li><a href="https://www.youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF">Saurabh Shukla's C++ Programming Playlist</a></li>
                                    </ul>
                                </li>
                                <li>Codes:
                                    <ul>
                                        <li><a href="https://drive.google.com/drive/folders/1kmaiNBalsfUZXFE_DZEgji7EyM_fUBe5?usp=sharing">C++ Programming Codes</a></li>
                                    </ul>
                                </li>
                                <li>Books:
                                    <ul>
                                        <li><a href="https://drive.google.com/file/d/1x7CcVnO6Bv1mVCbtwuparIdzhrpbuQsE/view?usp=sharing">OOPS with Balgurusamy C++</a></li>
                                    </ul>
                                </li>
                            </ol>
                            <br />


                        </ul>

                    </li>
                    <li class="list-group-item list-group-item-warning"><h4>Coding Platforms</h4>

                        <ul>
                            <ol>
                                <li>Practice Coding:
                                    <ul>
                                        <li><a href="https://www.hackerrank.com/domains/c">Hackerrank</a></li>
                                        <li><a href="https://www.codechef.com/problems/school/?itm_medium=navmenu&itm_campaign=problems">CodeChef</a></li>
                                    </ul>
                                </li>
                                <li>Competetive Coding:
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
        </div>):(
            <AuthRequired/>
        )
    )
}
export default CPPprogg;