import { useState,useContext, useEffect } from "react";
import UserContext from '../usercontext';

function AskQuestion(){

    let [status,setStatus]=useState("");
    useEffect(()=>{
        socket.on("AddedAskedQuestion",(data)=>{
            console.log(data);
            setStatus(data);
        })
    })

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
                <div id="B" className="B">
                    <form>
                        <h3>Upload a Question</h3>
                        <hr/>
                        <br/>
                        <label>Questioner Name: </label>
                        <br/>
                        <input 
                        style={{width:"97%",borderRadius:"5px" ,color:"white"}}
                        type="text" 
                        required
                        onChange={(e)=>{setQuestioner(e.target.value)}}
                        className="questionerName"
                        placeholder="Name"
                        />
                        <br/><br/>
                        <div >
                        <label> Question : </label>
                        <br/>
                        <textarea 
                        style={{width:"97%",height:"250px",borderRadius:"5px" , color:"white"}}
                        required
                        onChange={(e)=>{setQuestion(e.target.value)}}
                        placeholder="Ask Your Question..."
                        className="askquestion"
                        ></textarea>
                        </div>
                        <br/><br/>
                        <button onClick={uploadQuestion} className="uploadquesbtn"> Upload Question </button>
                        {(status!=="")?(<p>{status}</p>):(<p></p>)}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AskQuestion;
