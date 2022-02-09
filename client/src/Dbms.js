import React from "react";

import UserContext from "./usercontext";
import { useContext } from "react";
import AuthRequired from "./AuthRequired";


function Dbms() {

    const { user, setuser } = useContext(UserContext);


    return (
        (user !== null) ? (
            <div className="DBMS">
                <div class="container-fluid heading1">
                    <h2 className="cproggtitle" style={{ color: "white" }}>DBMS Resources</h2>

                    <ul class="list-group clist">
                        <li class="list-group-item list-group-item-success" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>You can use any database,here we have provided link to maria DB</h4>

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
                        <br />
                        <li class="list-group-item list-group-item-info" style={{ marginRight: "0px", borderRadius: "5px", marginLeft: "20px" }}><h4>DBMS resources</h4>
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
                                            <li><a href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y">Gate Smashers DBMS Playlist</a></li>
                                            <li><a href="https://www.youtube.com/playlist?list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ">Neso Academy DBMS Playlist</a></li>
                                            <li><a href="https://www.youtube.com/results?search_query=dbms+knowledge+gate">Knowledge gate DBMS Playlist</a></li>

                                        </ul>
                                    </li>
                                    <li>Books:
                                        <ul>
                                            <li><a href="https://drive.google.com/file/d/1QABJlqlqiPqvGPTWw6R1R8q76p0ZOuh-/view?usp=sharing">DBMS Notes</a></li>
                                            <li><a href="https://drive.google.com/file/d/1S4W8sSX6regU9fchi21jN6FJ1DYkoIwa/view?usp=sharing">DBMS PPT</a></li>
                                        </ul>
                                    </li>
                                </ol>
                                <br />


                            </ul>

                        </li>
                        <br />

                    </ul>

                </div>
            </div>) : (
            <AuthRequired />
        )
    )
}
export default Dbms;