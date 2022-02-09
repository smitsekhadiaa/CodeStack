import React, { useState, useEffect, useContext } from 'react'
import io from "socket.io-client";
import UserContext from "./usercontext";

const SignUp = (props) => {
    const [username, setUserame] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const [submitted, setSubmitted] = useState("");
    const [execute, setexecute] = useState(true);
    const { socket } = useContext(UserContext);
    const formSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            email: email,
            password: password,
            username: username
        }
        socket.emit("signUpSubmit", newEntry);
    }
    useEffect(() => {
        socket.on("signupsubmit", (data) => {
            setSubmitted(data)
            setexecute(false);
        })
    }, [socket]);
    return (
        <div className="signup">
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3 style={{ color: "white" }}>Sign Up</h3>
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
                                    <input type="submit" value="SignUp" class="btn btn-primary" style={{ marginLeft: "40%", marginTop: "20px" }} onClick={formSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {!execute && <div class="status"><div class="alert alert-success" role="alert">
                            {submitted}
                        </div>
                        </div>}
                    </div>
                </div>
            </div >
        </div>
    );
}
export default SignUp
