import React from "react";
import {Link} from "react-router-dom"
function Main() {
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", color: "white", backgroundColor: "#435A64", height: "65px" }}>
                <div>
                    <img src="" />
                </div>
                <div>
                    <div style={{ paddingTop: "17px" }}>
                        <Link to="/Main" style={{ fontWeight: "bolder", color: "white", padding: "15px", fontSize: "25px", textDecoration: "none" }}>CodeStack</Link>
                    </div>
                    {/* <p style={{ fontWeight: "bolder", color: "white", padding: "15px",paddingTop:"18px", fontSize: "25px" }}>CodeStack</p> */}
                </div>
                <div style={{ paddingTop: "22px", fontWeight: "5px", paddingRight: "10px" }}>
                    <Link to="/Home" style={{ textDecoration: "none", fontWeight: "bold", color: "white", fontSize: "20px" }}>Home</Link>
                </div>
                <div>
                    <button style={{ height: "35px", backgroundColor: "transparent", paddingTop: "22px", border: "none", fontSize: "20px" }}>
                        <Link to="/qaSection" style={{ textDecoration: "none", color: "white", fontSize: "20px" }}> Question-Answer Forum</Link>
                    </button>
                </div>
                <div>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", paddingTop: "27px", backgroundColor: "transparent" }}>
                            Language
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="/Cprogg">C Programming</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/CPPprogg">C++ Programming</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/Javaprogg">Java</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/Pythonprogg">Python</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/DSA">Data Structures and Algorithms</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/DBMS">Database Management System</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ color: "white", border: "1px solid white", margin: "20px", padding: "20px", backgroundColor: "rgba(15,15,15,0.7)", borderRadius: "5px" }}>
                <h1 style={{ backgroundColor: "transparent" }}>CodeStack!</h1>
                <hr style={{ backgroundColor: "grey" }} />
                <p style={{}}>
                    The idea of our project is to make learning coding easy. The website contains the best possible links to the playlist of different topics. The website also contains QnA section separately where the learner can ask doubts which will be answered by any experienced one.
                    <br />
                    We have made a topic-wise section for various coding subjects. We have provided links, resources and codes for all the topics.
                </p>
                <hr style={{ backgroundColor: "grey" }} />
                <h3>Content Covered :</h3>

                <p>1) C</p>
                <p>2) C++</p>
                <p>3) Python</p>
                <p>4) Java</p>
                <p>5) Data Structures and Algorithms</p>
                <p>6) Database Management System</p>
                <p>7) We have also shared the interview and placement experiences of our seniors from VJTI.</p>

                <hr style={{ backgroundColor: "grey" }} />
                <div>
                    <h3>Team Members</h3>
                    <li>Neel Shah</li>
                    <li>Harsh Nag</li>
                    <li>Dhruv Kunjadiya</li>
                    <li>Smit Sekhadia</li>
                </div>

            </div>
        </div>
    )
}
export default Main