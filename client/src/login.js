import React, { useState, useEffect, useContext } from 'react'
import SignUp from './signup';
import io from "socket.io-client";
import { useNavigate} from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Router,
    Route,
    Link
} from "react-router-dom";
// import UserContext from "./UserContext";

import UserContext from './usercontext';

const Login = () => {
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const [newUser, setNewUser] = useState(false);
    const [status, setStatus] = useState('');
    const [newPage, setNewPage] = useState(false);
    const [linker, setLinker] = useState(true);
    const { user, setuser } = useContext(UserContext);
    const { deluxe, setDeluxe, socket } = useContext(UserContext);
    const formSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            Email: email,
            Password: password,
            Username: username
        }
        setAllEntry([...allEntry, newEntry]);
        socket.emit("loginSubmit", newEntry);
        socket.on('loginStatus', (data) => {
            if (data === "Logged in successfully.") {
                setNewPage(true);
                setStatus(data);
                setDeluxe(newEntry);
                setuser(username);
                gotoHome();
            }
            else {
                setStatus(data);
            }
            setLinker(false);
        })

    }
    function opnSignUp() {
        setNewUser(true);
    }
    function loginset() {
        setuser(true);
    }

    let navigate = useNavigate();

    function gotoHome() {
        let path = `/Home`;
        navigate(path);
    }

    return (

        !newUser ? (
            <div className="login">
                <div >
                    <div class="container ">
                        <div class="d-flex justify-content-center h-100">
                            <div class="card2">
                                <div class="card-header" >
                                    <h3 style={{ color: "white" }}>Login</h3>
                                    <div class="d-flex justify-content-end social_icon">
                                        <span><i class="fab fa-facebook-square"></i></span>
                                        <span><i class="fab fa-google-plus-square"></i></span>
                                        <span><i class="fab fa-twitter-square"></i></span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form action="" onSubmit={formSubmit}>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="username" value={username}
                                                onChange={(e) => setUserame(e.target.value)} required
                                            />

                                        </div>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-user"></i></span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                        </div>
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-key"></i></span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        </div>

                                        <div class="form-group">
                                            <input type="submit" value="Login" class="btn btn-primary" style={{ marginLeft: "40%" }} onClick={formSubmit} />
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex justify-content-center links" style={{ color: "white" }}>
                                        Don't have an account?<Link to="/signup" style={{ fontWeight: "bold",color:"white" }}> Sign Up</Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {!linker && <div class="status"><div class="alert alert-success" role="alert">{status}</div></div>}
                        </div>
                    </div>

                </div>
            </div>
        ) : (
            <div>
                <SignUp />
            </div>

        )

    );

}

export default Login
