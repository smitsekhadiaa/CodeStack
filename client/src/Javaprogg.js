import React from "react";
import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";

function Javaprogg() {

    const { user, setuser } = useContext(UserContext);


    return (
        (user !== null) ? (
            <div className="Cprogg">
                <div class="container-fluid heading1">
                    <h2 className="cproggtitle" style={{ color: "white" }}>Java Programming Resources</h2>
                    <ul class="list-group clist">
                        <li class="list-group-item list-group-item-success" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Setting up Environment</h4>

                            <ul>
                                <li><h6>Eclipse:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://www.eclipse.org/downloads/packages/installer" target="_blank">Setting Up Eclipse</a></li>
                                            </ul>
                                        </li>
                                        <li>Video:
                                            <ul>
                                                <li><a href="https://youtu.be/i8rjkre_RYw" target="_blank">Video to Install Eclipse</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>Intellij:</h6>
                                    <ol>
                                        <li>Documentation:
                                            <ul>
                                                <li><a href="https://plugins.jetbrains.com/docs/intellij/setting-up-environment.html#configuring-intellij-platform-sdk" target="_blank">Setting Up Intellij</a></li>
                                            </ul>
                                        </li>
                                        <li>Videos:
                                            <ul>
                                                <li><a href="https://youtu.be/ntLJmHOJ0ME" target="_blank">Video to Install Intellij</a></li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>

                                <li><h6>Online Java Compilers:</h6>
                                    <ol>

                                        <li><a href="https://www.jdoodle.com/online-java-compiler/" target="_blank">JDoodle Java Compiler</a></li>
                                        <li><a href="https://www.programiz.com/java-programming/online-compiler/" target="_blank">Programiz Java Compiler</a></li>
                                        <li><a href="https://www.onlinegdb.com/online_java_compiler" target="_blank">Online GDB Compiler</a></li>
                                        <li><a href="https://www.tutorialspoint.com/compile_java_online.php" target="_blank">Tutorialpoint Java Compiler</a></li>

                                    </ol>
                                </li>
                            </ul>
                            <br />
                        </li>
                        <br />
                        <li class="list-group-item list-group-item-info" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>Basics of Java Programming</h4>
                            <ul>

                                <ol>
                                    <li>Documentation:
                                        <ul>
                                            <li><a href="https://www.geeksforgeeks.org/java/" target="_blank">GeeksforGeeks</a></li>
                                            <li><a href="https://www.javatpoint.com/java-tutorial" target="_blank">Javapoint</a></li>
                                            <li><a href="https://www.w3schools.com/java/" target="_blank">W3School</a></li>
                                        </ul>
                                    </li>
                                    <li>Videos:
                                        <ul>
                                            <li><a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q" target="_blank">Code with Harry Java Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al" target="_blank">Programming Knowledge Java Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5" target="_blank">Neso Academy Programming Playlist</a></li>
                                            <li><a href="https://www.youtube.com/watch?v=8cm1x4bC610" target="_blank">Telusko java Programming Playlist</a></li>
                                        </ul>
                                    </li>
                                    <li>Codes:
                                        <ul>
                                            <li><a href="https://codewithharry.com/videos/java-tutorials-for-beginners-1/" target="_blank">Java Programming Codes</a></li>
                                        </ul>
                                    </li>
                                    <li>Books:
                                        <ul>
                                            <li><a href="https://drive.google.com/file/d/1wpWJUmmyu38jum6s7rO0jXsx4dOyhsyb/view?usp=sharing" target="_blank">Head First Java</a></li>
                                            <li><a href="https://drive.google.com/file/d/1wpWJUmmyu38jum6s7rO0jXsx4dOyhsyb/view?usp=sharing" target="_blank">Java - The Complete Reference - By oracle</a></li>
                                            <li><a href="https://drive.google.com/file/d/1qFHk-fqzUXimm6k6Qr1Snk9oVQkKWVlt/view?usp=sharing" target="_blank">Java Programming-From the Ground Up</a></li>
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
export default Javaprogg;