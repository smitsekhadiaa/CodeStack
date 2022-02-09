import React from "react";
import './AuthRequired.scss'
function AuthRequired() {
    return (
        <div style={{ backgroundImage: "url('https://assets.codepen.io/1538474/star.svg')"}}>
            <div class="mars"></div>
            <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
            <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
            <p class="title">Oh no!!</p>
            <p class="subtitle">
                You’re either misspelling the URL <br /> or You're not logged in.
            </p>
            <div align="center"  >
                <a class="btn-back" href="/" style={{ marginBottom: "100px",textDecoration:"none"}} >Back to login</a>
            </div>
            <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
            <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
        </div>
    );
}

export default AuthRequired;