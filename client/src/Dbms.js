import React from "react";

import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";


function Dbms() {

    const { user, setuser } = useContext(UserContext);


    return (
        (user!==null)?(
        <div className="cprogg" style={{ paddingLeft: "25px" }}>
            <div>
                <h2 style={{ padding: "10px" }}>DBMS resources</h2>

                <ul class="list-group clist">
                    <li class="list-group-item list-group-item-success"><h4>You can use any database,here we have provided link to maria DB</h4>

                        <ul>
                            <li><h6>Maria DB:</h6>
                                <ol>
                                    <li>Documentation:
                                        <ul>
                                            <li><a href="https://mariadb.org/download/?t=mariadb&p=mariadb&r=10.6.5">Setting Up Maria DB</a></li>
                                        </ul>
                                    </li>
                                </ol>
                            </li>
                            <li><h6>Online Maria DB Platforms:</h6>
                                <ol>

                                    <li><a href="https://onecompiler.com/mysql">Online Maria DB tool</a></li>
                                </ol>
                            </li>
                        </ul>
                        <br />
                    </li>

                    <li class="list-group-item list-group-item-info"><h4>DBMS resources</h4>
                        <ul>

                            <ol>
                                <li>Documentation:
                                    <ul>
                                        <li><a href="https://www.geeksforgeeks.org/dbms/">GeeksforGeeks</a></li>
                                        <li><a href="https://www.javatpoint.com/dbms-tutorial">Java-Point</a></li>
                                        <li><a href="https://www.w3schools.in/category/dbms/">W3-school</a></li>
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
        </div>):(
            <AuthRequired/>
        )
    )
}
export default Dbms;