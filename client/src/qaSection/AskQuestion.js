import { useState } from "react";
import io from 'socket.io-client';

const socket=io.connect("http://localhost:3001");

function AskQuestion(){

    let [questioner,setQuestioner]=useState("");
    let [question,setQuestion]=useState("");

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
        <div>
            <div id="A">
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

export default AskQuestion;
