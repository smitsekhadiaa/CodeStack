<<<<<<< HEAD
import { useState } from "react";
import io from 'socket.io-client';

const socket=io.connect("http://localhost:3001");
=======
import { useState,useContext } from "react";
import UserContext from '../usercontext';
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad

function AskQuestion(){

    let [questioner,setQuestioner]=useState("");
    let [question,setQuestion]=useState("");
<<<<<<< HEAD

=======
    const {socket} = useContext(UserContext);
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad
    function uploadQuestion(event){
        event.preventDefault();
        if(questioner !== "" && question !== ""){
            let object={
                Questioner:questioner,
                Question:question
            };
            console.log(object);
            socket.emit("askingQuestion",object);
        }
    }

    return (
<<<<<<< HEAD
        <div>
            <div id="A">
=======
        <div className="askques">
            <div id="A" >
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad
                <div id="B">
                    <form>
                        <h3>Upload a Question</h3>
                        <hr/>
                        <br/>
                        <label>Questioner Name: </label>
                        <br/>
                        <input 
                        type="text" 
                        required
                        onChange={(e)=>{setQuestioner(e.target.value)}}
                        />
                        <br/><br/>
                        <label> Question : </label>
                        <br/>
                        <textarea 
                        required
                        onChange={(e)=>{setQuestion(e.target.value)}}
                        ></textarea>
                        <br/><br/>
                        <button onClick={uploadQuestion}> Upload Question </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default AskQuestion;
=======
export default AskQuestion;
>>>>>>> c90bd8a9db0fd4834beb48c037e0c4e7cfb52fad
