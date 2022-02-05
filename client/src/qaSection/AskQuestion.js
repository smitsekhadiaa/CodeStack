import { useState,useContext } from "react";
import UserContext from '../usercontext';

function AskQuestion(){

    let [questioner,setQuestioner]=useState("");
    let [question,setQuestion]=useState("");
    const {socket} = useContext(UserContext);
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
        <div className="askques">
            <div id="A" >
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
