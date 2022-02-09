import { useState ,useContext, useEffect} from "react";
import UserContext from '../usercontext';


function AddAnswer(props){

    let [status,setStatus]=useState("");

    useEffect(()=>{
        socket.on("addedAnswerStatus",(data)=>{
            console.log(data);
            setStatus(data);
        })
    })

    const [answerer,setAnswerer]=useState("");
    const [answer,setAnswer]=useState("");
    const {socket} = useContext(UserContext);
    function addAnswer(event){
        event.preventDefault();
        if(answerer!=="" && answer!==""){
            let object={
                Id:props.data._id,
                Answerer:answerer,
                Answer:answer
            };
            socket.emit("setAnswer",object);
        }
    }

    return(
        <div>
            <div className="AddAnswerForm">
                <form>
                    <br/>
                    <label>Name of Answerer</label>
                    <br/>
               
                    <input
                    style={{width:"97%"}}
                    type="text"
                    required
                    placeholder="Name of Answerer"
                    value={answerer}
                    onChange={(e)=>{
                        setAnswerer(e.target.value);
                    }}
                    />
                    <br/><br/>
                    <label>Add Valid Answer</label>
                    <br/>
                   
                    <textarea
                    style={{width:"97%",height:"250px",borderRadius:"5px"}}
                    required
                    placeholder="Answer"
                    value={answer}
                    onChange={(e)=>{
                        setAnswer(e.target.value);
                    }}
                    ></textarea>
                    <br/><br/>
                    <button onClick={addAnswer} className="btn btn-outline-success">Submit Answer</button>
                    {(status!="")?(<p>{status}</p>):(<p></p>)}
                </form>
            </div>
        </div>
    );
}

export default AddAnswer;