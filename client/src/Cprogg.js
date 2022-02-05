import React from "react";
import pict1 from "./assets/pict1.jpg"
import pict2 from "./assets/pict2.jpg"
import pict3 from "./assets/pict3.jpg"

import {useState} from "react"
function Cprogg(){

    
    let [booleanAddAnswer,setBooleanAddAnswer]=useState(false);
    let [booleanSeeAnswer,setBooleanSeeAnswer]=useState(false);
    let array=[false,false,false]
    let [arr,setArr]=useState(array)
    function arrFunction0(){
        setArr[0]=true;
        console.log("true")
    }
    function arrFunction0_(){
        setArr[0]=false;
    }

    function arrFunction1(){
        setBooleanAddAnswer(true);
        setBooleanSeeAnswer(false);
    }
    function arrFunction1_(){
        setBooleanAddAnswer(false);
        setBooleanSeeAnswer(true);
    }

    function arrFunction2(){
        setBooleanAddAnswer(true);
        setBooleanSeeAnswer(false);
    }
    function arrFunction2_(){
        setBooleanAddAnswer(false);
        setBooleanSeeAnswer(true);
    }

    return(
        <div className="cprogg">
           <div class="container-fluid heading1">
               <h2>C Programming Resources- Documentations</h2>

        <ul class="list-group clist">
            <li class="list-group-item list-group-item-success">Introduction to C
        <div>

        <button onClick={arrFunction0}>Add Answer</button>
        <button onClick={arrFunction0_}>See Answers</button>
        <div>
            {arr[0] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        
        </div>
        </div>
 
    </li>
    <br/>
    <li class="list-group-item list-group-item-info">Variables and Keywords
    <button onClick={arrFunction1}>Add Answer</button>
        <button onClick={arrFunction1_}>See Answers</button>
        <div>
            {arr[1] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        
        </div>
    </li>
    <br/>
    <li class="list-group-item list-group-item-warning">
    <button onClick={arrFunction2}>Add Answer</button>
        <button onClick={arrFunction2_}>See Answers</button>
        <div>
            {arr[2] && <div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, laudantium adipisci sed, facere quam neque vitae quaerat quis est velit sapiente harum, alias minus id amet ex illum. Dolores, aspernatur!
                Dicta, earum. In reiciendis, quaerat laudantium debitis soluta iure non, optio illo expedita, aperiam hic sapiente delectus corporis quae molestiae at aliquid unde tempore voluptas. Magnam labore quisquam sint soluta!
                Ab ad ipsa corrupti facilis soluta! Hic voluptate vitae a. Corrupti quidem enim qui eligendi accusantium, itaque dolor repellat, consectetur temporibus nihil, placeat soluta iusto repudiandae iste modi ex quis?
                Pariatur ut illum sequi ipsa culpa, perspiciatis dolore mollitia necessitatibus enim quibusdam, maiores impedit ducimus quaerat inventore veritatis! Dolores, culpa voluptatibus vero molestias minima nesciunt? A enim voluptate sunt error.
                Dolorem sit dolores aperiam nihil eum similique cum earum facilis est quia at, officia perferendis nam quam magnam tenetur, quo perspiciatis, laborum alias natus? Quasi iusto doloribus nam impedit numquam?
                Nam maiores sed reprehenderit labore accusamus, recusandae porro odit aspernatur eligendi quam suscipit enim. Nobis, perferendis impedit! Maiores eius quam at molestiae aperiam quibusdam, quasi est. Assumenda at adipisci similique!
                Velit voluptate porro quas, impedit deserunt eos quam. Consequatur, aperiam ullam possimus, expedita nemo consectetur inventore iure ipsa aspernatur culpa nisi voluptatibus, modi in atque amet quasi pariatur. Aut, quidem?
                Blanditiis dolor alias eaque voluptates a corrupti nulla beatae, assumenda reprehenderit hic, vitae porro suscipit quod facere saepe voluptatum sequi? Nihil adipisci nobis quos labore possimus saepe. Rerum, id doloremque.</p>
        </div></div>}
        </div>
    </li>
    <br/>
    <li class="list-group-item list-group-item-danger">Storage Classes in C</li>
    <br/>
    <li class="list-group-item list-group-item-success">Introduction to Operators</li>
    <li class="list-group-item list-group-item-info">Preprocessor in C</li>
    <li class="list-group-item list-group-item-warning">Conditional and Control Statements in C</li>
    <li class="list-group-item list-group-item-danger">Loops</li>
</ul>  

</div>
</div>    
    )
}
export default Cprogg;